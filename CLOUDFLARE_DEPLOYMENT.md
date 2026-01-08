# Déploiement sur Cloudflare Pages

## ✅ Changements effectués

1. ✅ Installé `@sveltejs/adapter-cloudflare`
2. ✅ Configuré `svelte.config.js` pour Cloudflare
3. ✅ Créé `wrangler.toml` avec configuration KV
4. ✅ Migré les sessions de mémoire vers Cloudflare KV
5. ✅ Mis à jour les types TypeScript

---

## 📋 Ce que vous devez faire

### 1. Créer le KV namespace

**Via le Dashboard Cloudflare :**
1. Allez sur https://dash.cloudflare.com/
2. Workers & Pages → KV
3. Cliquez "Create a namespace"
4. Nom : `gregory-conte-sessions`
5. Notez l'ID généré

**Ou via CLI :**
```bash
npm install -g wrangler
wrangler login
wrangler kv:namespace create SESSIONS
```

---

### 2. Connecter votre repo GitHub à Cloudflare Pages

1. Allez sur https://pages.cloudflare.com/
2. Cliquez "Create a project"
3. Connectez votre compte GitHub
4. Sélectionnez le repo `gregory-conte`
5. Configuration build :
   - **Build command** : `npm run build`
   - **Build output directory** : `.svelte-kit/cloudflare`
   - **Root directory** : `/`

---

### 3. Configurer les variables d'environnement

Dans Cloudflare Pages → Votre projet → **Settings → Environment Variables**

**Production :**
```
SECRET_TURNSTILE_SECRET_KEY = [votre clé secrète] (🔒 Encrypt)
PUBLIC_PHONE_NUMBER = +33...
PUBLIC_EMAIL_ADDRESS = email@example.com
```

**Preview (optionnel) :**
- Mêmes variables ou versions de test

---

### 4. Lier le KV namespace

Dans Cloudflare Pages → Votre projet → **Settings → Functions → KV namespace bindings**

1. Cliquez "Add binding"
2. **Variable name** : `SESSIONS`
3. **KV namespace** : Sélectionnez `gregory-conte-sessions`
4. Sauvegardez

---

### 5. Déployer

**Option A : Automatique (GitHub)**
```bash
git add .
git commit -m "Configure for Cloudflare Pages"
git push
```
→ Cloudflare détecte automatiquement le push et déploie

**Option B : Manuel (CLI)**
```bash
npm run build
wrangler pages deploy .svelte-kit/cloudflare
```

---

## 🔍 Vérifier le déploiement

1. Allez sur votre URL Cloudflare Pages (ex: `gregory-conte.pages.dev`)
2. Testez la page contact
3. Vérifiez que Turnstile fonctionne
4. Vérifiez les logs dans Dashboard → View logs

---

## 🛠️ Développement local

Pour tester localement avec KV :

```bash
# Installer wrangler globalement
npm install -g wrangler

# Développement avec simulation KV locale
wrangler pages dev .svelte-kit/cloudflare --kv SESSIONS

# Ou développement normal (sans KV)
npm run dev
```

**Note :** En dev local sans wrangler, les sessions ne persistent pas (normal).

---

## 📦 Fichiers créés/modifiés

- ✏️ `svelte.config.js` - Adapter Cloudflare
- ✏️ `package.json` - Ajout adapter-cloudflare
- ✏️ `src/hooks.server.ts` - Utilise KV au lieu de Set en mémoire
- ✏️ `src/app.d.ts` - Types Cloudflare Platform
- ✏️ `src/routes/contact/+page.server.ts` - await validateSession()
- ✨ `wrangler.toml` - Configuration Cloudflare
- ✨ `CLOUDFLARE_DEPLOYMENT.md` - Ce guide

---

## 🎯 Avantages de cette config

✅ Sessions persistantes (survivent aux redéploiements)
✅ Turnstile + Pages sur le même réseau
✅ Gratuit illimité
✅ Performance mondiale (CDN)
✅ Auto-scaling
✅ HTTPS automatique

---

## ⚠️ Important

- **NE PAS** commit `.env` ou secrets dans Git
- Les secrets vont dans le dashboard Cloudflare
- Le KV binding doit être configuré dans le dashboard
- L'ID du namespace dans `wrangler.toml` est remplacé automatiquement par Cloudflare Pages

---

## 🆘 Troubleshooting

**Erreur "SESSIONS is undefined" :**
→ Vérifiez que le KV binding est configuré dans Settings → Functions

**Turnstile échoue :**
→ Vérifiez que `SECRET_TURNSTILE_SECRET_KEY` est dans Environment Variables

**Build échoue :**
→ Vérifiez que `npm run build` fonctionne localement

**Sessions ne persistent pas :**
→ Vérifiez les logs pour voir si KV est accessible
