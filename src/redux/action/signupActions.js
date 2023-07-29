import { SignupConstants } from "../constant/signupContants"

export const add_initial_plan_info = (planObject) => (
    {
        type: SignupConstants.ADD_INIT_PLAN_INFO,
        payload: planObject,
    }
);

export const add_contact_info = (contactObject) => (
    {
        type: SignupConstants.ADD_CONTANT_INFO,
        payload: contactObject,
    }
);

export const add_domain_info = (domainInfo) => (
    {
        type: SignupConstants.ADD_DOMAIN_INFO,
        payload: domainInfo,
    }
);
