<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-6 text-center pt-4">
                <span
                    class="icon-Success-steps-icon client-portal-icon"
                    :style="{color: portfolio.secondary_color}"
                    v-if="progress_bar === 100"
                />
                <span
                    class="icon-paper-document-icon client-portal-icon"
                    :style="{color: portfolio.secondary_color}"
                    v-else
                />
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-md-6 text-center pt-4">
                <h2
                    class="client-portal-heading-text mb-4"
                    v-if="progress_bar === 90"
                >
                    Verify your Bank Account
                </h2>
                <h2
                    class="client-portal-heading-text mb-4"
                    v-else-if="progress_bar === 100"
                >
                    Success!
                </h2>
                <h2
                    class="client-portal-heading-text mb-4"
                    v-else
                >
                    Easy Online Verification as Fast as 5 minutes
                </h2>
                <transition
                    name="online-verification-transition"
                    mode="out-in"
                >
                    <client-bank-account v-if="progress_bar === 90" />
                    <verification-complete v-else-if="progress_bar === 100" />
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
'use strict';

import ClientAddress from '~/components/templates/online-verification/ClientAddress';
import ClientBankAccount from '~/components/templates/online-verification/ClientBankAccount';
import ClientBirthday from '~/components/templates/online-verification/ClientBirthday';
import ClientMilitaryStatus from '~/components/templates/online-verification/ClientMilitaryStatus';
import ClientName from '~/components/templates/online-verification/ClientName';
import VerificationComplete from '~/components/templates/online-verification/VerificationComplete';
import * as constants from '~/fixed_variables/constants';

export default {
    name: 'OnlineVerification',

    components: {
        ClientAddress,
        ClientBankAccount,
        ClientBirthday,
        ClientMilitaryStatus,
        ClientName,
        VerificationComplete,
    },

    computed: {
        progress_bar () {
            return this.$store.getters.getProgressBar;
        },
    },

    created () {
        this.portfolio = this.$jsVars.portfolio;
        this.clientPortalButton = this.portfolio.primary_color;
        this.$store.commit('setProgressBar', constants.ONLINE_VERIFICATION_STEP_FIVE);
    },
};
</script>
