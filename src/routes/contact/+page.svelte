<script>
    import {
        PUBLIC_PHONE_NUMBER,
        PUBLIC_EMAIL_ADDRESS,
    } from "$env/static/public";
</script>

<div class="faux-body">
    <section>
        <header>
            <h2>Contactez-moi !</h2>
        </header>
        <div>
            <p>
                Je serais ravi d'échanger avec vous. <br />
                Appelez-moi au numéro suivant
                <strong>{PUBLIC_PHONE_NUMBER}</strong>.
            </p>
            <p>
                Ou envoyez-moi un email à <strong>{PUBLIC_EMAIL_ADDRESS}</strong
                >
            </p>
        </div>
    </section>
</div>

<style>
    strong {
        font-weight: 700;
    }
</style>
