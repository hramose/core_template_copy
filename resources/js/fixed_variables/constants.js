'use strict';

// CLIENT STATUSES
export const CLIENT_STATUS_NEW_CLIENT_ID = 38000;
export const CLIENT_STATUS_RETURNING_CLIENT_ID = 38001;
export const CLIENT_STATUS_LOAN_TRANSFER_CLIENT_ID = 38002;
export const CLIENT_STATUS_LOAN_ON_GOING_CLIENT_ID = 38003;
export const CLIENT_STATUS_LOAN_ACTION_CLIENT_ID = 38004;
export const ONLINE_VERIFICATION_STEP_ONE = 20;
export const ONLINE_VERIFICATION_STEP_TWO = 40;
export const ONLINE_VERIFICATION_STEP_THREE = 60;
export const ONLINE_VERIFICATION_STEP_FOUR = 80;
export const ONLINE_VERIFICATION_STEP_FIVE = 90;
export const ONLINE_VERIFICATION_STEP_SIX = 100;
// DECISION LOGIC CODES
export const DL_SUCCESSFUL = 100;
export const DL_UNKNOWN = 99;
export const DL_IN_PROGRESS = 20;
export const DL_VERIFIED = 3;
export const DL_LOGIN_NOT_VERIFIED = 2;
export const DL_STARTED_NOT_COMPLETED = 1;
export const DL_NOT_STARTED = 0;
export const DL_ACCOUNT_ERROR = -1;
export const FINANCIAL_INSTITUTION_ERROR = -2;
export const OTHER_ERROR = -3;
export const DL_REDIRECT_PAGE_SUCCESS = [
    DL_SUCCESSFUL,
    DL_VERIFIED,
];
export const DL_REDIRECT_PAGE_TRY_AGAIN = [
    DL_UNKNOWN,
    DL_IN_PROGRESS,
    DL_NOT_STARTED,
    DL_LOGIN_NOT_VERIFIED,
    DL_STARTED_NOT_COMPLETED,
];
export const DL_REDIRECT_PAGE_ERROR = [
    DL_ACCOUNT_ERROR,
    FINANCIAL_INSTITUTION_ERROR,
    OTHER_ERROR,
]


