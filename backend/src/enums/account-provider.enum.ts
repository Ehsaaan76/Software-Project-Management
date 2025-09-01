export const ProviderEnum = {
    GOOGLE: "GOOGLE",
    GITHUB: "GITHUB",
    FACEBOOK: "FACEBOOK",
    EMAIL: "EMAIL",
};

export type providerEnumType = keyof typeof ProviderEnum;