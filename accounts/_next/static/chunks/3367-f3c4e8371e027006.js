!function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}
          , t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {},
        e._sentryDebugIds[t] = "fce3aaec-539b-405c-ae58-56f70272ea71",
        e._sentryDebugIdIdentifier = "sentry-dbid-fce3aaec-539b-405c-ae58-56f70272ea71")
    } catch (e) {}
}(),
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[3367], {
    41609: function(e, t, n) {
        var o = n(280)
          , s = n(64160)
          , i = n(35694)
          , a = n(1469)
          , r = n(98612)
          , c = n(44144)
          , u = n(25726)
          , d = n(36719)
          , A = Object.prototype.hasOwnProperty;
        e.exports = function(e) {
            if (null == e)
                return !0;
            if (r(e) && (a(e) || "string" == typeof e || "function" == typeof e.splice || c(e) || d(e) || i(e)))
                return !e.length;
            var t = s(e);
            if ("[object Map]" == t || "[object Set]" == t)
                return !e.size;
            if (u(e))
                return !o(e).length;
            for (var n in e)
                if (A.call(e, n))
                    return !1;
            return !0
        }
    },
    40793: function(e, t, n) {
        "use strict";
        n.d(t, {
            FC: function() {
                return y
            },
            Zm: function() {
                return A
            }
        });
        var o = n(71671)
          , s = n(97039)
          , i = n(52188)
          , a = n(82926)
          , r = n(85893)
          , c = {
            keySeparator: ".",
            nsSeparator: "."
        }
          , u = e => {
            let {href: t, children: n, type: o, tone: a, emphasis: c} = e;
            return (0,
            r.jsx)(i.h, {
                emphasis: null != c ? c : s._ ? void 0 : "low",
                tone: null != a ? a : "brand",
                type: null != o ? o : "label2",
                href: t,
                target: "_blank",
                children: n
            })
        }
          , d = "https://support.kraken.com"
          , A = {
            contactSupport: "".concat(d, "/hc/en-us/forms/360000614072"),
            learnAboutAuthenticatorApps: "".concat(d, "/hc/en-us/articles/360000444903-What-is-an-Authenticator-App-"),
            learnAboutSecurityKey: "".concat(d, "/hc/en-us/articles/360000570283-Using-a-Security-Key-for-two-factor-authentication-2FA-"),
            learnAboutStaticPasswords: "".concat(d, "/hc/en-us/articles/360000570223-Using-a-Static-Password-for-two-factor-authentication-2FA-"),
            learnAboutGSL: "".concat(d, "/hc/en-us/articles/201396877-What-is-the-Global-Settings-Lock-GSL"),
            learnAboutMasterKey: "".concat(d, "/hc/en-us/articles/360000444923-What-is-a-Master-Key-"),
            learnAboutFunding2FA: "".concat(d, "/hc/en-us/articles/360000911763-How-does-two-factor-authentication-2FA-for-funding-deposits-withdrawals-work-"),
            learnAboutTrading2FA: "".concat(d, "/hc/en-us/articles/360000911503-How-does-two-factor-authentication-2FA-for-trading-work-"),
            securingYourEmailAddress: "".concat(d, "/hc/en-us/articles/360021870651-Securing-your-email-address"),
            learnAboutPGP: "".concat(d, "/hc/en-us/articles/how-do-i-set-up-pgp-gpg-encryption-for-my-email-on-kraken"),
            learnAboutPasskeys: "".concat(d, "/hc/en-us/articles/what-is-a-passkey"),
            learnAboutWeakPasswords: "".concat(d, "/hc/en-us/articles/201396497-Password-requirements-and-recommendations"),
            learnAboutTfaUpgrade: "".concat(d, "/hc/en-us/articles/two-factor-authentication-2fa-upgrade-faq"),
            learnMoreAboutMultipleTfa: "".concat(d, "/hc/en-us/articles/how-to-enable-multiple-2fa"),
            learnMoreAboutAppLinksAndUniversalLinks: "".concat(d, "/hc/en-us/articles/how-to-enable-app-links-and-universal-links-on-mobile-devices"),
            learnMoreAbout2FA: "".concat(d, "/articles/360000426923-secure-your-account-with-two-factor-authentication-2fa-")
        }
          , l = {
            APP_NAME_CONSUMER: "Kraken",
            PLATFORM_NAME: "Kraken"
        }
          , g = (e, t) => n => {
            let {legacyI18nKey: s} = n
              , i = (0,
            o.S0)(n, ["legacyI18nKey"])
              , a = t(s);
            return (0,
            r.jsx)(e, (0,
            o.EZ)((0,
            o.ih)({}, i), {
                i18nKey: a
            }))
        }
        ;
        g.displayName = "Wrapped Trans";
        var y = e => {
            let {tFunc: t, Trans: n, options: i} = e
              , d = e => (null == i ? void 0 : i.nsSeparator) ? e.replace(".", null == i ? void 0 : i.nsSeparator) : e
              , y = (e, n) => t(d(e), (0,
            o.ih)((0,
            o.ih)((0,
            o.ih)((0,
            o.ih)({}, l), n), c), i))
              , b = g(n, d)
              , S = (0,
            o.ih)((0,
            o.ih)({}, c), i);
            return {
                "Please verify this device": y("AccountsSettingsWeb.PleaseVerifyThisDevice"),
                "We've detected that you're using a new device.<br />For your security, please verify this device using one of your trusted passkeys before continuing.": (0,
                r.jsx)(b, {
                    legacyI18nKey: "AccountsSettingsWeb.WeVeDetectedThatYouReUsingANewDeviceBrForYourSecurityPleaseVerifyThisDeviceUsingOneOfYourTrustedPasskeysBeforeContinuing",
                    opts: S
                }),
                "Uses a one-time code from an app like Google Authenticator or Authy. <LearnMoreLink>Learn more</LearnMoreLink>": (0,
                r.jsx)(b, {
                    legacyI18nKey: "AccountsSettingsWeb.UsesAOneTimeCodeFromAnAppLikeGoogleAuthenticatorOrAuthyLearnMoreLinkLearnMoreLearnMoreLink",
                    components: {
                        LearnMoreLink: (0,
                        r.jsx)(u, {
                            type: s._ ? void 0 : "label2",
                            href: A.learnAboutAuthenticatorApps
                        })
                    },
                    opts: S,
                    values: l
                }),
                "Generates a one-time code upon touching on a physical security key such as a YubiKey. <LearnMoreLink>Learn more</LearnMoreLink>": (0,
                r.jsx)(b, {
                    legacyI18nKey: "AccountsSettingsWeb.GeneratesAOneTimeCodeUponTouchingOnAPhysicalSecurityKeySuchAsAYubiKeyLearnMoreLinkLearnMoreLearnMoreLink",
                    components: {
                        LearnMoreLink: (0,
                        r.jsx)(u, {
                            type: s._ ? void 0 : "label2",
                            href: A.learnAboutSecurityKey
                        })
                    },
                    opts: S,
                    values: l
                }),
                "Uses a fixed sequence of characters. <LearnMoreLink>Learn more</LearnMoreLink>": (0,
                r.jsx)(b, {
                    legacyI18nKey: "AccountsSettingsWeb.UsesAFixedSequenceOfCharactersLearnMoreLinkLearnMoreLearnMoreLink",
                    components: {
                        LearnMoreLink: (0,
                        r.jsx)(u, {
                            type: s._ ? void 0 : "label2",
                            href: A.learnAboutStaticPasswords
                        })
                    },
                    opts: S,
                    values: l
                }),
                "Lock changes to your account settings and hide sensitive information with Global Settings Lock. <LearnMoreLink>Learn more</LearnMoreLink>": (0,
                r.jsx)(b, {
                    legacyI18nKey: "AccountsSettingsWeb.LockChangesToYourAccountSettingsAndHideSensitiveInformationWithGlobalSettingsLockLearnMoreLinkLearnMoreLearnMoreLink",
                    components: {
                        LearnMoreLink: (0,
                        r.jsx)(u, {
                            type: s._ ? void 0 : "label2",
                            href: A.learnAboutGSL
                        })
                    },
                    opts: S,
                    values: l
                }),
                "The Master Key acts as an account recovery key if you lose or forget your sign-in 2FA method. It is also used in conjunction with other advanced security features. <LearnMoreLink>Learn more</LearnMoreLink>": (0,
                r.jsx)(b, {
                    legacyI18nKey: "AccountsSettingsWeb.TheMasterKeyActsAsAnAccountRecoveryKeyIfYouLoseOrForgetYourSignIn2FAMethodItIsAlsoUsedInConjunctionWithOtherAdvancedSecurityFeaturesLearnMoreLinkLearnMoreLearnMoreLink",
                    components: {
                        LearnMoreLink: (0,
                        r.jsx)(u, {
                            type: s._ ? void 0 : "label2",
                            href: A.learnAboutMasterKey
                        })
                    },
                    opts: S,
                    values: l
                }),
                "Protect your funds by using a 2FA confirmation every time you withdraw funds or generate a new deposit address. <LearnMoreLink>Learn more</LearnMoreLink>": (0,
                r.jsx)(b, {
                    legacyI18nKey: "AccountsSettingsWeb.ProtectYourFundsByUsingA2FAConfirmationEveryTimeYouWithdrawFundsOrGenerateANewDepositAddressLearnMoreLinkLearnMoreLearnMoreLink",
                    components: {
                        LearnMoreLink: (0,
                        r.jsx)(u, {
                            type: s._ ? void 0 : "label2",
                            href: A.learnAboutFunding2FA
                        })
                    },
                    opts: S,
                    values: l
                }),
                "Protect your funds by using a 2FA confirmation every time you are placing an order. <LearnMoreLink>Learn More<LearnMoreLink>": (0,
                r.jsx)(b, {
                    legacyI18nKey: "AccountsSettingsWeb.ProtectYourFundsByUsingA2FAConfirmationEveryTimeYouArePlacingAnOrderLearnMoreLinkLearnMoreLearnMoreLink",
                    components: {
                        LearnMoreLink: (0,
                        r.jsx)(u, {
                            type: s._ ? void 0 : "label2",
                            href: A.learnAboutTrading2FA
                        })
                    },
                    opts: S,
                    values: l
                }),
                "Prevent unauthorized trades by using a 2FA confirmation for every order. <LearnMoreLink>Learn more</LearnMoreLink>": (0,
                r.jsx)(b, {
                    legacyI18nKey: "AccountsSettingsWeb.PreventUnauthorizedTradesByUsingA2FAConfirmationForEveryOrderLearnMoreLinkLearnMoreLearnMoreLink",
                    components: {
                        LearnMoreLink: (0,
                        r.jsx)(u, {
                            type: s._ ? void 0 : "label2",
                            href: A.learnAboutTrading2FA
                        })
                    },
                    opts: S,
                    values: l
                }),
                "Add Master Key to your account with one of the following methods. <LearnMoreLink>Learn more.</LearnMoreLink>": (0,
                r.jsx)(b, {
                    legacyI18nKey: "AccountsSettingsWeb.AddMasterKeyToYourAccountWithOneOfTheFollowingMethodsLearnMoreLinkLearnMoreLearnMoreLink",
                    components: {
                        LearnMoreLink: (0,
                        r.jsx)(u, {
                            type: s._ ? void 0 : "label2",
                            href: A.learnAboutMasterKey
                        })
                    },
                    opts: S,
                    values: l
                }),
                'Select "Username only" if you often use public computers to sign in to your account. This protects your email address from getting exposed. <LearnMoreLink>Learn more</LearnMoreLink>': (0,
                r.jsx)(b, {
                    legacyI18nKey: "AccountsSettingsWeb.SelectUsernameOnlyIfYouOftenUsePublicComputersToSignInToYourAccountThisProtectsYourEmailAddressFromGettingExposedLearnMoreLinkLearnMoreLearnMoreLink",
                    components: {
                        LearnMoreLink: (0,
                        r.jsx)(u, {
                            type: s._ ? void 0 : "label2",
                            href: A.securingYourEmailAddress
                        })
                    },
                    opts: S,
                    values: l
                }),
                "Use end-to-end encryption for emails sent to you from Kraken. <LearnMoreLink>Learn more</LearnMoreLink>": (0,
                r.jsx)(b, {
                    legacyI18nKey: "AccountsSettingsWeb.UseEndToEndEncryptionForEmailsSentToYouFromKrakenLearnMoreLinkLearnMoreLearnMoreLink",
                    components: {
                        LearnMoreLink: (0,
                        r.jsx)(u, {
                            type: s._ ? void 0 : "label2",
                            href: A.learnAboutPGP
                        })
                    },
                    opts: S,
                    values: l
                }),
                "Verification has started": y("AccountsSettingsWeb.VerificationHasStarted"),
                "Uses FIDO2 compliant device biometrics or a hardware security key. Add up to 5 passkeys that protect you from phishing attacks. <LearnMoreLink>Learn more</LearnMoreLink>": (0,
                r.jsx)(b, {
                    legacyI18nKey: "AccountsSettingsWeb.UsesFIDO2CompliantDeviceBiometricsOrAHardwareSecurityKeyAddUpTo5PasskeysThatProtectYouFromPhishingAttacksLearnMoreLinkLearnMoreLearnMoreLink",
                    components: {
                        LearnMoreLink: (0,
                        r.jsx)(u, {
                            type: s._ ? void 0 : "label2",
                            href: A.learnAboutPasskeys
                        })
                    },
                    opts: S,
                    values: l
                }),
                "GSL will require you to wait for the selected unlock period before you can make any changes to your settings. <LearnMoreLink>Learn more</LearnMoreLink>": (0,
                r.jsx)(b, {
                    legacyI18nKey: "AccountsSettingsWeb.GSLWillRequireYouToWaitForTheSelectedUnlockPeriodBeforeYouCanMakeAnyChangesToYourSettingsLearnMoreLinkLearnMoreLearnMoreLink",
                    components: {
                        LearnMoreLink: (0,
                        r.jsx)(u, {
                            href: A.learnAboutGSL,
                            type: s._ ? "body2" : "body1"
                        })
                    },
                    opts: S,
                    values: l
                }),
                "Username only": y("AccountsSettingsWeb.UsernameOnly"),
                "<Label1>Username</Label1> ({{username}}) <Label1>only</Label1>": e => (0,
                r.jsx)(b, {
                    legacyI18nKey: "AccountsSettingsWeb.Label1UsernameLabel1UsernameLabel1OnlyLabel1",
                    components: {
                        Label1: (0,
                        r.jsx)(a.x, {
                            type: s._ ? "label2" : "label1"
                        })
                    },
                    values: (0,
                    o.ih)((0,
                    o.ih)({}, e), l),
                    opts: S
                }),
                "<Label1>Username</Label1> ({{username}}) <Label1>or email</Label1> ({{email}})": e => (0,
                r.jsx)(b, {
                    legacyI18nKey: "AccountsSettingsWeb.Label1UsernameLabel1UsernameLabel1OrEmailLabel1Email",
                    components: {
                        Label1: (0,
                        r.jsx)(a.x, {
                            type: s._ ? "label2" : "label1"
                        })
                    },
                    values: (0,
                    o.ih)((0,
                    o.ih)({}, e), l),
                    opts: S
                }),
                "Username or email": y("AccountsSettingsWeb.UsernameOrEmail"),
                "Your settings will be unlocked in {{timeToUnlock}}. <LearnMoreLink>Learn more</LearnMoreLink>": e => (0,
                r.jsx)(b, {
                    legacyI18nKey: "AccountsSettingsWeb.YourSettingsWillBeUnlockedInTimeToUnlockLearnMoreLinkLearnMoreLearnMoreLink",
                    components: {
                        LearnMoreLink: (0,
                        r.jsx)(u, {
                            href: A.learnAboutGSL,
                            type: s._ ? "body2" : "label2"
                        })
                    },
                    values: (0,
                    o.ih)((0,
                    o.ih)({}, e), l),
                    opts: S
                }),
                "API Key": y("AccountsSettingsWeb.APIKey"),
                "API restrictions": y("AccountsSettingsWeb.APIRestrictions"),
                Activate: y("AccountsSettingsWeb.Activate"),
                "Activate Global Settings Lock (GSL)": y("AccountsSettingsWeb.ActivateGlobalSettingsLockGSL"),
                "Add a description to organize your 2FA methods.": y("AccountsSettingsWeb.AddADescriptionToOrganizeYour2FAMethods"),
                "Add Authenticator app": y("AccountsSettingsWeb.AddAuthenticatorApp"),
                "Add passkey": y("AccountsSettingsWeb.AddPasskey"),
                "Added!": y("AccountsSettingsWeb.Added"),
                "Adjust the duration for automatic sign-out after account inactivity.": y("AccountsSettingsWeb.AdjustTheDurationForAutomaticSignOutAfterAccountInactivity"),
                "Advanced Settings": y("AccountsSettingsWeb.AdvancedSettings"),
                "An introduction to passkeys": y("AccountsSettingsWeb.AnIntroductionToPasskeys"),
                "App name": y("AccountsSettingsWeb.AppName"),
                "{{appName}} permissions": e => y("AccountsSettingsWeb.AppNamePermissions", e),
                "{{appName}} will be immediately removed and the app will no longer be able to access your account.": e => y("AccountsSettingsWeb.AppNameWillBeImmediatelyRemovedAndTheAppWillNoLongerBeAbleToAccessYourAccount", e),
                "Authenticator app": y("AccountsSettingsWeb.AuthenticatorApp"),
                "Authenticator app added successfully.": y("AccountsSettingsWeb.AuthenticatorAppAddedSuccessfully"),
                "Authenticator app registration failed. Please try again later.": y("AccountsSettingsWeb.AuthenticatorAppRegistrationFailedPleaseTryAgainLater"),
                "Auto sign-out": y("AccountsSettingsWeb.AutoSignOut"),
                "Auto-sign out updated": y("AccountsSettingsWeb.AutoSignOutUpdated"),
                "Between {{min}}–{{max}} minutes (7 days).": e => y("AccountsSettingsWeb.BetweenMinMaxMinutes7Days", e),
                Cancel: y("AccountsSettingsWeb.Cancel"),
                "Cancel an open order": y("AccountsSettingsWeb.CancelAnOpenOrder"),
                Change: y("AccountsSettingsWeb.Change"),
                "Change auto sign-out duration": y("AccountsSettingsWeb.ChangeAutoSignOutDuration"),
                "Change email encryption": y("AccountsSettingsWeb.ChangeEmailEncryption"),
                "Change of auto-sign out duration failed": y("AccountsSettingsWeb.ChangeOfAutoSignOutDurationFailed"),
                "Change password": y("AccountsSettingsWeb.ChangePassword"),
                "Change password request failed": y("AccountsSettingsWeb.ChangePasswordRequestFailed"),
                Close: y("AccountsSettingsWeb.Close"),
                "Close an open position": y("AccountsSettingsWeb.CloseAnOpenPosition"),
                "Confirm password": y("AccountsSettingsWeb.ConfirmPassword"),
                "Connected apps": y("AccountsSettingsWeb.ConnectedApps"),
                Continue: y("AccountsSettingsWeb.Continue"),
                "Copy/paste your public key to receive encrypted email.": y("AccountsSettingsWeb.CopyPasteYourPublicKeyToReceiveEncryptedEmail"),
                "Create a device-bound passkey": y("AccountsSettingsWeb.CreateADeviceBoundPasskey"),
                "Create a new order": y("AccountsSettingsWeb.CreateANewOrder"),
                "Create a passkey on a hardware security key": y("AccountsSettingsWeb.CreateAPasskeyOnAHardwareSecurityKey"),
                "Create a passkey on a mobile phone": y("AccountsSettingsWeb.CreateAPasskeyOnAMobilePhone"),
                Created: y("AccountsSettingsWeb.Created"),
                "Cross-Device Passkey": y("AccountsSettingsWeb.CrossDevicePasskey"),
                "Current password": y("AccountsSettingsWeb.CurrentPassword"),
                "{{days}} days": e => y("AccountsSettingsWeb.DaysDays", e),
                Delete: y("AccountsSettingsWeb.Delete"),
                "Deposit funds": y("AccountsSettingsWeb.DepositFunds"),
                Description: y("AccountsSettingsWeb.Description"),
                "Description is required": y("AccountsSettingsWeb.DescriptionIsRequired"),
                "Description must not exceed {{maxChars}} characters": e => y("AccountsSettingsWeb.DescriptionMustNotExceedMaxCharsCharacters", e),
                "Description updated successfully.": y("AccountsSettingsWeb.DescriptionUpdatedSuccessfully"),
                "Determine what Kraken features {{appName}} can have access to.": e => y("AccountsSettingsWeb.DetermineWhatKrakenFeaturesAppNameCanHaveAccessTo", e),
                "Device-Bound Passkey": y("AccountsSettingsWeb.DeviceBoundPasskey"),
                "Do not reuse an existing password.": y("AccountsSettingsWeb.DoNotReuseAnExistingPassword"),
                "Do not reuse your sign-in password as your Master Key.": y("AccountsSettingsWeb.DoNotReuseYourSignInPasswordAsYourMasterKey"),
                "Do not reuse your sign-in password for trading 2FA.": y("AccountsSettingsWeb.DoNotReuseYourSignInPasswordForTrading2FA"),
                Edit: y("AccountsSettingsWeb.Edit"),
                "Edit description": y("AccountsSettingsWeb.EditDescription"),
                "Edit funding 2FA method description": y("AccountsSettingsWeb.EditFunding2FAMethodDescription"),
                "Edit Master Key description": y("AccountsSettingsWeb.EditMasterKeyDescription"),
                "Edit trading 2FA method description": y("AccountsSettingsWeb.EditTrading2FAMethodDescription"),
                "Edit Authenticator app description": y("AccountsSettingsWeb.EditAuthenticatorAppDescription"),
                "Edit Passkey description": y("AccountsSettingsWeb.EditPasskeyDescription"),
                "Edit 2FA Password description": y("AccountsSettingsWeb.Edit2FAPasswordDescription"),
                "Edit YubiKey description": y("AccountsSettingsWeb.EditYubiKeyDescription"),
                "Editing this setting is not possible in read-only mode.": y("AccountsSettingsWeb.EditingThisSettingIsNotPossibleInReadOnlyMode"),
                "Email encryption": y("AccountsSettingsWeb.EmailEncryption"),
                Enable: y("AccountsSettingsWeb.Enable"),
                "Enable Funding 2FA": y("AccountsSettingsWeb.EnableFunding2FA"),
                "Enable Master Key": y("AccountsSettingsWeb.EnableMasterKey"),
                "Enable Trading 2FA": y("AccountsSettingsWeb.EnableTrading2FA"),
                "Enter code from 2FA app": y("AccountsSettingsWeb.EnterCodeFrom2FAApp"),
                "Enter code from YubiKey": y("AccountsSettingsWeb.EnterCodeFromYubiKey"),
                "Enter code from YubiKey again to confirm": y("AccountsSettingsWeb.EnterCodeFromYubiKeyAgainToConfirm"),
                "Enter password": y("AccountsSettingsWeb.EnterPassword"),
                "Enter the code manually": y("AccountsSettingsWeb.EnterTheCodeManually"),
                Expiry: y("AccountsSettingsWeb.Expiry"),
                Failed: y("AccountsSettingsWeb.Failed"),
                "Failed to create Two-Factor Authentication. Please try again.": y("AccountsSettingsWeb.FailedToCreateTwoFactorAuthenticationPleaseTryAgain"),
                "Failed to disable email encryption": y("AccountsSettingsWeb.FailedToDisableEmailEncryption"),
                "Failed to load QR code. Please close this dialog and try again in a few minutes.": y("AccountsSettingsWeb.FailedToLoadQRCodePleaseCloseThisDialogAndTryAgainInAFewMinutes"),
                "Failed to set up email encryption": y("AccountsSettingsWeb.FailedToSetUpEmailEncryption"),
                "Failed to update 2FA settings": y("AccountsSettingsWeb.FailedToUpdate2FASettings"),
                "Fast API": y("AccountsSettingsWeb.FastAPI"),
                "For hardening your account's security even further": y("AccountsSettingsWeb.ForHardeningYourAccountSSecurityEvenFurther"),
                "Funding 2FA": y("AccountsSettingsWeb.Funding2FA"),
                "Funding 2FA settings": y("AccountsSettingsWeb.Funding2FASettings"),
                "Global Settings Lock (GSL)": y("AccountsSettingsWeb.GlobalSettingsLockGSL"),
                "Got it": y("AccountsSettingsWeb.GotIt"),
                "Hardware Security Key": y("AccountsSettingsWeb.HardwareSecurityKey"),
                "Hide setup key": y("AccountsSettingsWeb.HideSetupKey"),
                "How do you want to sign in to your Kraken account?": y("AccountsSettingsWeb.HowDoYouWantToSignInToYourKrakenAccount"),
                "IP access restrictions": y("AccountsSettingsWeb.IPAccessRestrictions"),
                "Initiated on {{device}}": e => y("AccountsSettingsWeb.InitiatedOnDevice", e),
                "Input required": y("AccountsSettingsWeb.InputRequired"),
                Invalid: y("AccountsSettingsWeb.Invalid"),
                "Invalid PGP key": y("AccountsSettingsWeb.InvalidPGPKey"),
                "Invalid YubiKey input": y("AccountsSettingsWeb.InvalidYubiKeyInput"),
                "Lock Settings": y("AccountsSettingsWeb.LockSettings"),
                Locked: y("AccountsSettingsWeb.Locked"),
                "Master Key": y("AccountsSettingsWeb.MasterKey"),
                "{{minPasswordSize}} characters": e => y("AccountsSettingsWeb.MinPasswordSizeCharacters", e),
                Minutes: y("AccountsSettingsWeb.Minutes"),
                "{{minutes}} of account inactivity before automatic sign out.": e => y("AccountsSettingsWeb.MinutesOfAccountInactivityBeforeAutomaticSignOut", e),
                "Must be between {{min}}–{{max}} minutes.": e => y("AccountsSettingsWeb.MustBeBetweenMinMaxMinutes", e),
                "New password": y("AccountsSettingsWeb.NewPassword"),
                "No apps connected": y("AccountsSettingsWeb.NoAppsConnected"),
                "No immediate unlocking": y("AccountsSettingsWeb.NoImmediateUnlocking"),
                OAuth: y("AccountsSettingsWeb.OAuth"),
                "PGP Key": y("AccountsSettingsWeb.PGPKey"),
                Passkey: y("AccountsSettingsWeb.Passkey"),
                "Passkey added successfully.": y("AccountsSettingsWeb.PasskeyAddedSuccessfully"),
                "Passkey registration failed. Please try again later.": y("AccountsSettingsWeb.PasskeyRegistrationFailedPleaseTryAgainLater"),
                "This may be because the passkey is already registered on your account. Please try again.": y("AccountsSettingsWeb.ThisMayBeBecauseThePasskeyIsAlreadyRegisteredOnYourAccountPleaseTryAgain"),
                Passkeys: y("AccountsSettingsWeb.Passkeys"),
                "Passkeys are a secure and convenient way to sign in to your account. They can use your fingerprint, FaceID or hardware security keys. One major benefit of passkeys is that they protect you from phishing attacks.": y("AccountsSettingsWeb.PasskeysAreASecureAndConvenientWayToSignInToYourAccountTheyCanUseYourFingerprintFaceIDOrHardwareSecurityKeysOneMajorBenefitOfPasskeysIsThatTheyProtectYouFromPhishingAttacks"),
                Password: y("AccountsSettingsWeb.Password"),
                "Passwords must match": y("AccountsSettingsWeb.PasswordsMustMatch"),
                Permissions: {
                    "Access WebSockets API": y("AccountsSettingsWeb.Permissions.AccessWebSocketsAPI"),
                    "Add withdrawal address without email confirmation": y("AccountsSettingsWeb.Permissions.AddWithdrawalAddressWithoutEmailConfirmation"),
                    "Authorize the 3rd party app to create a one time API key for the existing session": y("AccountsSettingsWeb.Permissions.AuthorizeThe3rdPartyAppToCreateAOneTimeAPIKeyForTheExistingSession"),
                    "Cancel and modify orders": y("AccountsSettingsWeb.Permissions.CancelAndModifyOrders"),
                    "Create and modify orders": y("AccountsSettingsWeb.Permissions.CreateAndModifyOrders"),
                    "Deposit funds to your account": y("AccountsSettingsWeb.Permissions.DepositFundsToYourAccount"),
                    "Export your ledger history": y("AccountsSettingsWeb.Permissions.ExportYourLedgerHistory"),
                    "See your account balance": y("AccountsSettingsWeb.Permissions.SeeYourAccountBalance"),
                    "See your account information": y("AccountsSettingsWeb.Permissions.SeeYourAccountInformation"),
                    "Staking & unstaking": y("AccountsSettingsWeb.Permissions.StakingUnstaking"),
                    "Transfer funds to earn rewards": y("AccountsSettingsWeb.Permissions.TransferFundsToEarnRewards"),
                    "Update and remove withdrawal address without email confirmation": y("AccountsSettingsWeb.Permissions.UpdateAndRemoveWithdrawalAddressWithoutEmailConfirmation"),
                    "View closed orders & trades": y("AccountsSettingsWeb.Permissions.ViewClosedOrdersTrades"),
                    "View open orders & trades": y("AccountsSettingsWeb.Permissions.ViewOpenOrdersTrades"),
                    "View your ledger history": y("AccountsSettingsWeb.Permissions.ViewYourLedgerHistory"),
                    "Withdraw funds from your account": y("AccountsSettingsWeb.Permissions.WithdrawFundsFromYourAccount"),
                    "See your full name": y("AccountsSettingsWeb.Permissions.SeeYourFullName"),
                    "See your country and sub-division (state or province)": y("AccountsSettingsWeb.Permissions.SeeYourCountryAndSubDivisionStateOrProvince"),
                    "See your verification status and subscription benefits": y("AccountsSettingsWeb.Permissions.SeeYourVerificationStatusAndSubscriptionBenefits")
                },
                PermissionsCategory: {
                    Funds: y("AccountsSettingsWeb.PermissionsCategory.Funds"),
                    "Orders and trades": y("AccountsSettingsWeb.PermissionsCategory.OrdersAndTrades"),
                    Other: y("AccountsSettingsWeb.PermissionsCategory.Other")
                },
                "Please note that removing {{appName}} does not mean any previously passed data is deleted. The app may still save your data.": e => y("AccountsSettingsWeb.PleaseNoteThatRemovingAppNameDoesNotMeanAnyPreviouslyPassedDataIsDeletedTheAppMayStillSaveYourData", e),
                "Protect your account with a unique, strong password not used elsewhere.": y("AccountsSettingsWeb.ProtectYourAccountWithAUniqueStrongPasswordNotUsedElsewhere"),
                "Re-type new password": y("AccountsSettingsWeb.ReTypeNewPassword"),
                "Re-type password": y("AccountsSettingsWeb.ReTypePassword"),
                Recommended: y("AccountsSettingsWeb.Recommended"),
                Remove: y("AccountsSettingsWeb.Remove"),
                "Remove {{appName}}": e => y("AccountsSettingsWeb.RemoveAppName", e),
                "Remove email encryption": y("AccountsSettingsWeb.RemoveEmailEncryption"),
                Required: y("AccountsSettingsWeb.Required"),
                "Restricted to trusted IPs only": y("AccountsSettingsWeb.RestrictedToTrustedIPsOnly"),
                "Restricted to trusted third party IPs only": y("AccountsSettingsWeb.RestrictedToTrustedThirdPartyIPsOnly"),
                "Restricting IP access can further increase security. Please note that Unrestricted IP access is only available for read-only permissions.": y("AccountsSettingsWeb.RestrictingIPAccessCanFurtherIncreaseSecurityPleaseNoteThatUnrestrictedIPAccessIsOnlyAvailableForReadOnlyPermissions"),
                "Revoke access": y("AccountsSettingsWeb.RevokeAccess"),
                "Revoke access to {{appName}}": e => y("AccountsSettingsWeb.RevokeAccessToAppName", e),
                Save: y("AccountsSettingsWeb.Save"),
                "Saving new description failed. Please try again later.": y("AccountsSettingsWeb.SavingNewDescriptionFailedPleaseTryAgainLater"),
                Sensitive: y("AccountsSettingsWeb.Sensitive"),
                "Set up key": y("AccountsSettingsWeb.SetUpKey"),
                "Set up your 2FA app": y("AccountsSettingsWeb.SetUpYour2FAApp"),
                Settings: y("AccountsSettingsWeb.Settings"),
                "Sign-in": y("AccountsSettingsWeb.SignIn"),
                "Sign-in Two-Factor Authentication (2FA)": y("AccountsSettingsWeb.SignInTwoFactorAuthentication2FA"),
                "Sign-in with": y("AccountsSettingsWeb.SignInWith"),
                "Sign me out after:": y("AccountsSettingsWeb.SignMeOutAfter"),
                "Something went wrong, please try updating the setting at later time.": y("AccountsSettingsWeb.SomethingWentWrongPleaseTryUpdatingTheSettingAtLaterTime"),
                "Static password": y("AccountsSettingsWeb.StaticPassword"),
                Submitting: y("AccountsSettingsWeb.Submitting"),
                Success: y("AccountsSettingsWeb.Success"),
                "The current password is incorrect.": y("AccountsSettingsWeb.TheCurrentPasswordIsIncorrect"),
                "The current password is required.": y("AccountsSettingsWeb.TheCurrentPasswordIsRequired"),
                "The PGP key will be removed from your account.": y("AccountsSettingsWeb.ThePGPKeyWillBeRemovedFromYourAccount"),
                "These are apps you connected to your Kraken account.": y("AccountsSettingsWeb.TheseAreAppsYouConnectedToYourKrakenAccount"),
                "This 2FA method is not secure and is no longer supported. We recommend upgrading to a security key or authenticator app.": y("AccountsSettingsWeb.This2FAMethodIsNotSecureAndIsNoLongerSupportedWeRecommendUpgradingToASecurityKeyOrAuthenticatorApp"),
                "This 2FA method is outdated. We recommend deleting it and continuing to use a security key or authenticator app.": y("AccountsSettingsWeb.This2FAMethodIsOutdatedWeRecommendDeletingItAndContinuingToUseASecurityKeyOrAuthenticatorApp"),
                "This code doesn't look right. Try again.": y("AccountsSettingsWeb.ThisCodeDoesnTLookRightTryAgain"),
                "Time of account inactivity before automatic sign-out.": y("AccountsSettingsWeb.TimeOfAccountInactivityBeforeAutomaticSignOut"),
                "Touch your YubiKey again to confirm": y("AccountsSettingsWeb.TouchYourYubiKeyAgainToConfirm"),
                "Trading 2FA": y("AccountsSettingsWeb.Trading2FA"),
                "Trading 2FA settings": y("AccountsSettingsWeb.Trading2FASettings"),
                Type: y("AccountsSettingsWeb.Type"),
                "Unlock immediately": y("AccountsSettingsWeb.UnlockImmediately"),
                "Unlock period": y("AccountsSettingsWeb.UnlockPeriod"),
                Unrestricted: y("AccountsSettingsWeb.Unrestricted"),
                "Update method": y("AccountsSettingsWeb.UpdateMethod"),
                "Updates recommended": y("AccountsSettingsWeb.UpdatesRecommended"),
                "Updates required": y("AccountsSettingsWeb.UpdatesRequired"),
                "Use a passkey to sign in": y("AccountsSettingsWeb.UseAPasskeyToSignIn"),
                "Uses a fixed sequence of characters for verification.": y("AccountsSettingsWeb.UsesAFixedSequenceOfCharactersForVerification"),
                "Uses a one-time code from an app like Google Authenticator.": y("AccountsSettingsWeb.UsesAOneTimeCodeFromAnAppLikeGoogleAuthenticator"),
                "Uses a physical device for strong authentication with a simple touch.": y("AccountsSettingsWeb.UsesAPhysicalDeviceForStrongAuthenticationWithASimpleTouch"),
                "Uses device biometrics or a hardware security key.": y("AccountsSettingsWeb.UsesDeviceBiometricsOrAHardwareSecurityKey"),
                Valid: y("AccountsSettingsWeb.Valid"),
                "View permissions": y("AccountsSettingsWeb.ViewPermissions"),
                "View setup key": y("AccountsSettingsWeb.ViewSetupKey"),
                "Waiting for YubiKey": y("AccountsSettingsWeb.WaitingForYubiKey"),
                "We recommend saving your first passkey on a mobile device, password manager or keychain for cross-device compatibility.": y("AccountsSettingsWeb.WeRecommendSavingYourFirstPasskeyOnAMobileDevicePasswordManagerOrKeychainForCrossDeviceCompatibility"),
                'We recommend setting this to "username only" if you access Kraken on a shared device.': y("AccountsSettingsWeb.WeRecommendSettingThisToUsernameOnlyIfYouAccessKrakenOnASharedDevice"),
                "What are passkeys?": y("AccountsSettingsWeb.WhatArePasskeys"),
                "Withdraw and transfer funds": y("AccountsSettingsWeb.WithdrawAndTransferFunds"),
                "Without Master Key, you won’t be able to unlock your settings right away.": y("AccountsSettingsWeb.WithoutMasterKeyYouWonTBeAbleToUnlockYourSettingsRightAway"),
                "You can now sign-in with your username and email address": y("AccountsSettingsWeb.YouCanNowSignInWithYourUsernameAndEmailAddress"),
                "You can now sign-in with your username only": y("AccountsSettingsWeb.YouCanNowSignInWithYourUsernameOnly"),
                "You have disabled email encryption": y("AccountsSettingsWeb.YouHaveDisabledEmailEncryption"),
                "You have set up 2FA for funding": y("AccountsSettingsWeb.YouHaveSetUp2FAForFunding"),
                "You have set up 2FA for trading": y("AccountsSettingsWeb.YouHaveSetUp2FAForTrading"),
                "You have set up a Master Key": y("AccountsSettingsWeb.YouHaveSetUpAMasterKey"),
                "You have set up email encryption": y("AccountsSettingsWeb.YouHaveSetUpEmailEncryption"),
                "You have updated 2FA settings": y("AccountsSettingsWeb.YouHaveUpdated2FASettings"),
                "You will be asked for 2FA authentication when you take the following actions:": y("AccountsSettingsWeb.YouWillBeAskedFor2FAAuthenticationWhenYouTakeTheFollowingActions"),
                "You will be asked in the next step to set up your passkey by selecting a method.": y("AccountsSettingsWeb.YouWillBeAskedInTheNextStepToSetUpYourPasskeyBySelectingAMethod"),
                "Your 2FA code should be 6 digits": y("AccountsSettingsWeb.Your2FACodeShouldBe6Digits"),
                "Your browser doesn't support HTML video. Here is a link to the video instead.": y("AccountsSettingsWeb.YourBrowserDoesnTSupportHTMLVideoHereIsALinkToTheVideoInstead"),
                "Your Master Key can be used to unlock your settings right away and bypass GSL.": y("AccountsSettingsWeb.YourMasterKeyCanBeUsedToUnlockYourSettingsRightAwayAndBypassGSL"),
                "Your new password cannot be the same as your current password. Please choose a different password and try again.": y("AccountsSettingsWeb.YourNewPasswordCannotBeTheSameAsYourCurrentPasswordPleaseChooseADifferentPasswordAndTryAgain"),
                "Your new password should contain at least:": y("AccountsSettingsWeb.YourNewPasswordShouldContainAtLeast"),
                "Your password has now been updated.": y("AccountsSettingsWeb.YourPasswordHasNowBeenUpdated"),
                "Your request to lock settings failed.": y("AccountsSettingsWeb.YourRequestToLockSettingsFailed"),
                "Your settings have been locked.": y("AccountsSettingsWeb.YourSettingsHaveBeenLocked"),
                YubiKey: y("AccountsSettingsWeb.YubiKey"),
                "Yubico OTP": y("AccountsSettingsWeb.YubicoOTP"),
                "1 day": y("AccountsSettingsWeb._1Day"),
                "1 day of account inactivity before automatic sign out.": y("AccountsSettingsWeb._1DayOfAccountInactivityBeforeAutomaticSignOut"),
                "1. Download and install a 2FA app on your device. We recommend Google Authenticator.": y("AccountsSettingsWeb._1DownloadAndInstallA2FAAppOnYourDeviceWeRecommendGoogleAuthenticator"),
                "1. Have your key ready.": y("AccountsSettingsWeb._1HaveYourKeyReady"),
                "1 hour": y("AccountsSettingsWeb._1Hour"),
                "1 hour of account inactivity before automatic sign out.": y("AccountsSettingsWeb._1HourOfAccountInactivityBeforeAutomaticSignOut"),
                "1. Insert a YubiKey into a USB port.": y("AccountsSettingsWeb._1InsertAYubiKeyIntoAUSBPort"),
                "1 letter": y("AccountsSettingsWeb._1Letter"),
                "1 number": y("AccountsSettingsWeb._1Number"),
                "1 special character": y("AccountsSettingsWeb._1SpecialCharacter"),
                "2. Click button below ‘Set up key’ and follow the instructions in the browser prompt.": y("AccountsSettingsWeb._2ClickButtonBelowSetUpKeyAndFollowTheInstructionsInTheBrowserPrompt"),
                "2FA Code": y("AccountsSettingsWeb._2FACode"),
                "2. Scan the QR code.": y("AccountsSettingsWeb._2ScanTheQRCode"),
                "2. Touch or tap the YubiKey to confirm.": y("AccountsSettingsWeb._2TouchOrTapTheYubiKeyToConfirm"),
                "3 days (default)": y("AccountsSettingsWeb._3DaysDefault"),
                "3. Enter the authentication code from the app.": y("AccountsSettingsWeb._3EnterTheAuthenticationCodeFromTheApp"),
                "7 days": y("AccountsSettingsWeb._7Days"),
                "7 days of account inactivity before automatic sign out.": y("AccountsSettingsWeb._7DaysOfAccountInactivityBeforeAutomaticSignOut"),
                "8 hours (default)": y("AccountsSettingsWeb._8HoursDefault"),
                "8 hours of account inactivity before automatic sign out.": y("AccountsSettingsWeb._8HoursOfAccountInactivityBeforeAutomaticSignOut"),
                "Password needs to be at least {{min}} characters long": e => y("AccountsSettingsWeb.PasswordNeedsToBeAtLeastMinCharactersLong", e),
                "Password length cannot exceed {{max}} characters": e => y("AccountsSettingsWeb.PasswordLengthCannotExceedMaxCharacters", e),
                "Password must contain at least one number": y("AccountsSettingsWeb.PasswordMustContainAtLeastOneNumber"),
                "Password must contain at least one letter": y("AccountsSettingsWeb.PasswordMustContainAtLeastOneLetter"),
                "Password must contain at least one special character": y("AccountsSettingsWeb.PasswordMustContainAtLeastOneSpecialCharacter"),
                Off: y("AccountsSettingsWeb.Off"),
                "Other...": y("AccountsSettingsWeb.Other"),
                Deactivated: y("AccountsSettingsWeb.Deactivated"),
                "Edit key": y("AccountsSettingsWeb.EditKey"),
                "Enable Sign-in 2FA": y("AccountsSettingsWeb.EnableSignIn2FA"),
                "Use passkeys to sign in quickly and safely with your face or fingerprint and to protect your account from phishing.": y("AccountsSettingsWeb.UsePasskeysToSignInQuicklyAndSafelyWithYourFaceOrFingerprintAndToProtectYourAccountFromPhishing"),
                "Add a passkey in under a minute. <LearnMoreLink>Learn more</LearnMoreLink>": (0,
                r.jsx)(b, {
                    legacyI18nKey: "AccountsSettingsWeb.AddAPasskeyInUnderAMinuteLearnMoreLinkLearnMoreLearnMoreLink",
                    components: {
                        LearnMoreLink: (0,
                        r.jsx)(u, {
                            type: s._ ? "label2" : "label1",
                            href: A.learnAboutPasskeys
                        })
                    },
                    opts: S,
                    values: l
                }),
                Skip: y("AccountsSettingsWeb.Skip"),
                "Your 2FA method is not secure": y("AccountsSettingsWeb.Your2FAMethodIsNotSecure"),
                "Simplify 2FA with passkeys": y("AccountsSettingsWeb.Simplify2FAWithPasskeys"),
                "Passkey failed to add": y("AccountsSettingsWeb.PasskeyFailedToAdd"),
                "Please try again.": y("AccountsSettingsWeb.PleaseTryAgain"),
                "Maybe later": y("AccountsSettingsWeb.MaybeLater"),
                "Global Settings Lock is active": y("AccountsSettingsWeb.GlobalSettingsLockIsActive"),
                "Deactivate GSL to make changes to your settings.": y("AccountsSettingsWeb.DeactivateGSLToMakeChangesToYourSettings"),
                "Deactivate Global Settings Lock (GSL)": y("AccountsSettingsWeb.DeactivateGlobalSettingsLockGSL"),
                Deactivate: y("AccountsSettingsWeb.Deactivate"),
                "You initiated the deactivation of GSL.": y("AccountsSettingsWeb.YouInitiatedTheDeactivationOfGSL"),
                "Your account settings will be unlocked on:": y("AccountsSettingsWeb.YourAccountSettingsWillBeUnlockedOn"),
                "Time left to unlock:": y("AccountsSettingsWeb.TimeLeftToUnlock"),
                "If you don’t want to wait you can unlock your account settings immediately by using your Master Key.": y("AccountsSettingsWeb.IfYouDonTWantToWaitYouCanUnlockYourAccountSettingsImmediatelyByUsingYourMasterKey"),
                "Incorrect current password. Please make sure to use a correct password and try again.": y("AccountsSettingsWeb.IncorrectCurrentPasswordPleaseMakeSureToUseACorrectPasswordAndTryAgain"),
                "Deactivate now": y("AccountsSettingsWeb.DeactivateNow"),
                "Other 2FA methods": y("AccountsSettingsWeb.Other2FAMethods"),
                "YubiKey OTP": y("AccountsSettingsWeb.YubiKeyOTP"),
                Enter: y("AccountsSettingsWeb.Enter"),
                "This 2FA code doesn't look right. Please try again.": y("AccountsSettingsWeb.This2FACodeDoesnTLookRightPleaseTryAgain"),
                "This YubiKey code doesn't look right. Please try again.": y("AccountsSettingsWeb.ThisYubiKeyCodeDoesnTLookRightPleaseTryAgain"),
                "This 2FA password doesn't look right. Please try again.": y("AccountsSettingsWeb.This2FAPasswordDoesnTLookRightPleaseTryAgain"),
                "This security key code doesn't look right. Try again.": y("AccountsSettingsWeb.ThisSecurityKeyCodeDoesnTLookRightTryAgain"),
                "Invalid credentials": y("AccountsSettingsWeb.InvalidCredentials"),
                "Your entered credentials may be incorrect or email sign-in is disabled for your account.": y("AccountsSettingsWeb.YourEnteredCredentialsMayBeIncorrectOrEmailSignInIsDisabledForYourAccount"),
                "Please check your credentials and try again.": y("AccountsSettingsWeb.PleaseCheckYourCredentialsAndTryAgain"),
                "Account closed": y("AccountsSettingsWeb.AccountClosed"),
                "This account was closed. Create a new account or contact Support for details.": y("AccountsSettingsWeb.ThisAccountWasClosedCreateANewAccountOrContactSupportForDetails"),
                "Account suspended": y("AccountsSettingsWeb.AccountSuspended"),
                "This account is temporarily suspended. Contact Support for details.": y("AccountsSettingsWeb.ThisAccountIsTemporarilySuspendedContactSupportForDetails"),
                "Passkey authentication failed.": y("AccountsSettingsWeb.PasskeyAuthenticationFailed"),
                "Please try again or use another 2FA method.": y("AccountsSettingsWeb.PleaseTryAgainOrUseAnother2FAMethod"),
                "You've tried too many times. Try again later.": y("AccountsSettingsWeb.YouVeTriedTooManyTimesTryAgainLater"),
                "Network error occurred. Try again later.": y("AccountsSettingsWeb.NetworkErrorOccurredTryAgainLater"),
                "2FA code": y("AccountsSettingsWeb._2FACode"),
                "2FA password": y("AccountsSettingsWeb._2FAPassword"),
                "Try again": y("AccountsSettingsWeb.TryAgain"),
                "Use passkey": y("AccountsSettingsWeb.UsePasskey"),
                "Enter the code provided by your YubiKey.": y("AccountsSettingsWeb.EnterTheCodeProvidedByYourYubiKey"),
                "YubiKey OTP code": y("AccountsSettingsWeb.YubiKeyOTPCode"),
                "Use auto detection": y("AccountsSettingsWeb.UseAutoDetection"),
                "Enter code manually": y("AccountsSettingsWeb.EnterCodeManually"),
                "Enter the 2FA code generated by your authenticator app to confirm this action.": y("AccountsSettingsWeb.EnterThe2FACodeGeneratedByYourAuthenticatorAppToConfirmThisAction"),
                "Enter the Funding 2FA code generated by your authenticator app to confirm this action.": y("AccountsSettingsWeb.EnterTheFunding2FACodeGeneratedByYourAuthenticatorAppToConfirmThisAction"),
                "Enter the Trading 2FA code generated by your authenticator app to confirm this action.": y("AccountsSettingsWeb.EnterTheTrading2FACodeGeneratedByYourAuthenticatorAppToConfirmThisAction"),
                "Connect your YubiKey to your device and tap to confirm this action.": y("AccountsSettingsWeb.ConnectYourYubiKeyToYourDeviceAndTapToConfirmThisAction"),
                "Connect your Funding 2FA YubiKey to your device and tap to confirm this action.": y("AccountsSettingsWeb.ConnectYourFunding2FAYubiKeyToYourDeviceAndTapToConfirmThisAction"),
                "Connect your Trading 2FA YubiKey to your device and tap to confirm this action.": y("AccountsSettingsWeb.ConnectYourTrading2FAYubiKeyToYourDeviceAndTapToConfirmThisAction"),
                "Enter your Master Key 2FA password to complete this action": y("AccountsSettingsWeb.EnterYourMasterKey2FAPasswordToCompleteThisAction"),
                "Use your hardware security key or device passkey to confirm this action.": y("AccountsSettingsWeb.UseYourHardwareSecurityKeyOrDevicePasskeyToConfirmThisAction"),
                "Use your Funding 2FA hardware security key or device passkey to confirm this action.": y("AccountsSettingsWeb.UseYourFunding2FAHardwareSecurityKeyOrDevicePasskeyToConfirmThisAction"),
                "Use your Trading 2FA hardware security key or device passkey to confirm this action.": y("AccountsSettingsWeb.UseYourTrading2FAHardwareSecurityKeyOrDevicePasskeyToConfirmThisAction"),
                "Global Settings Lock was successfully removed.": y("AccountsSettingsWeb.GlobalSettingsLockWasSuccessfullyRemoved"),
                "Global Settings Lock could not be removed. Try again later.": y("AccountsSettingsWeb.GlobalSettingsLockCouldNotBeRemovedTryAgainLater"),
                "Global Settings unlock initiated": y("AccountsSettingsWeb.GlobalSettingsUnlockInitiated"),
                "Reactivate GSL": y("AccountsSettingsWeb.ReactivateGSL"),
                "Remove Authenticator app": y("AccountsSettingsWeb.RemoveAuthenticatorApp"),
                "Remove Passkey": y("AccountsSettingsWeb.RemovePasskey"),
                "Remove 2FA Password": y("AccountsSettingsWeb.Remove2FAPassword"),
                "Remove YubiKey": y("AccountsSettingsWeb.RemoveYubiKey"),
                "Remove Master Key": y("AccountsSettingsWeb.RemoveMasterKey"),
                "Remove Funding 2FA": y("AccountsSettingsWeb.RemoveFunding2FA"),
                "Remove Trading 2FA": y("AccountsSettingsWeb.RemoveTrading2FA"),
                "Authenticator app removed successfully.": y("AccountsSettingsWeb.AuthenticatorAppRemovedSuccessfully"),
                "Passkey removed successfully.": y("AccountsSettingsWeb.PasskeyRemovedSuccessfully"),
                "2FA Password removed successfully.": y("AccountsSettingsWeb._2FAPasswordRemovedSuccessfully"),
                "YubiKey removed successfully.": y("AccountsSettingsWeb.YubiKeyRemovedSuccessfully"),
                "Removal failed. Please try again later.": y("AccountsSettingsWeb.RemovalFailedPleaseTryAgainLater"),
                "Cannot remove Authenticator app": y("AccountsSettingsWeb.CannotRemoveAuthenticatorApp"),
                "Cannot remove Passkey": y("AccountsSettingsWeb.CannotRemovePasskey"),
                "Cannot remove 2FA Password": y("AccountsSettingsWeb.CannotRemove2FAPassword"),
                "Cannot remove YubiKey": y("AccountsSettingsWeb.CannotRemoveYubiKey"),
                "At least one cross-device sign-in 2FA method is required to protect your account.": y("AccountsSettingsWeb.AtLeastOneCrossDeviceSignIn2FAMethodIsRequiredToProtectYourAccount"),
                "Please add an authenticator app, hardware security key or cross-device passkey before deleting Authenticator app.": y("AccountsSettingsWeb.PleaseAddAnAuthenticatorAppHardwareSecurityKeyOrCrossDevicePasskeyBeforeDeletingAuthenticatorApp"),
                "Please add an authenticator app, hardware security key or cross-device passkey before deleting Passkey.": y("AccountsSettingsWeb.PleaseAddAnAuthenticatorAppHardwareSecurityKeyOrCrossDevicePasskeyBeforeDeletingPasskey"),
                "Please add an authenticator app, hardware security key or cross-device passkey before deleting 2FA Password.": y("AccountsSettingsWeb.PleaseAddAnAuthenticatorAppHardwareSecurityKeyOrCrossDevicePasskeyBeforeDeleting2FAPassword"),
                "Please add an authenticator app, hardware security key or cross-device passkey before deleting YubiKey.": y("AccountsSettingsWeb.PleaseAddAnAuthenticatorAppHardwareSecurityKeyOrCrossDevicePasskeyBeforeDeletingYubiKey"),
                "Removal failed. Primary 2FA method cannot be removed.": y("AccountsSettingsWeb.RemovalFailedPrimary2FAMethodCannotBeRemoved"),
                "The selected Authenticator app will be removed from your account.": y("AccountsSettingsWeb.TheSelectedAuthenticatorAppWillBeRemovedFromYourAccount"),
                "The selected YubiKey will be removed from your account.": y("AccountsSettingsWeb.TheSelectedYubiKeyWillBeRemovedFromYourAccount"),
                "The selected 2FA Password will be removed from your account.": y("AccountsSettingsWeb.TheSelected2FAPasswordWillBeRemovedFromYourAccount"),
                "The selected Passkey will be removed from your account.": y("AccountsSettingsWeb.TheSelectedPasskeyWillBeRemovedFromYourAccount"),
                "The 2FA method will be removed and you will no longer be prompted to present it while trading.": y("AccountsSettingsWeb.The2FAMethodWillBeRemovedAndYouWillNoLongerBePromptedToPresentItWhileTrading"),
                "The 2FA method will be removed and you will no longer be prompted to present it while funding your account.": y("AccountsSettingsWeb.The2FAMethodWillBeRemovedAndYouWillNoLongerBePromptedToPresentItWhileFundingYourAccount"),
                "The Master Key will be removed and will no longer be able to be used to access your account.": y("AccountsSettingsWeb.TheMasterKeyWillBeRemovedAndWillNoLongerBeAbleToBeUsedToAccessYourAccount"),
                Name: y("AccountsSettingsWeb.Name"),
                "Session Expired": y("AccountsSettingsWeb.SessionExpired"),
                "Change method": y("AccountsSettingsWeb.ChangeMethod"),
                "Unable to sign in": y("AccountsSettingsWeb.UnableToSignIn"),
                "Your entered email/username and password may be incorrect. If email sign-in is disabled on your account, please try again with your username instead.": y("AccountsSettingsWeb.YourEnteredEmailUsernameAndPasswordMayBeIncorrectIfEmailSignInIsDisabledOnYourAccountPleaseTryAgainWithYourUsernameInstead"),
                "That doesn't look right. Check your email/username and password and try again.": y("AccountsSettingsWeb.ThatDoesnTLookRightCheckYourEmailUsernameAndPasswordAndTryAgain"),
                "Step-up authentication failed. Please try again.": y("AccountsSettingsWeb.StepUpAuthenticationFailedPleaseTryAgain"),
                "Verify it's you": y("AccountsSettingsWeb.VerifyItSYou"),
                "Enter the Sign-in 2FA code generated by your authenticator app to confirm this action.": y("AccountsSettingsWeb.EnterTheSignIn2FACodeGeneratedByYourAuthenticatorAppToConfirmThisAction"),
                "Enter your 2FA password to confirm this action": y("AccountsSettingsWeb.EnterYour2FAPasswordToConfirmThisAction"),
                "Enter your Funding 2FA password to confirm this action": y("AccountsSettingsWeb.EnterYourFunding2FAPasswordToConfirmThisAction"),
                "Enter your Trading 2FA password to confirm this action": y("AccountsSettingsWeb.EnterYourTrading2FAPasswordToConfirmThisAction"),
                "Would you like to skip device approval next time?": y("AccountsSettingsWeb.WouldYouLikeToSkipDeviceApprovalNextTime"),
                "<p>Make future sign-ins faster and more secure by using a passkey.</p><p>Add a Passkey as your 2FA method to skip the new device approval next time you sign in. <LearnMoreLink>Learn more</LearnMoreLink></p>": (0,
                r.jsx)(b, {
                    legacyI18nKey: "AccountsSettingsWeb.PMakeFutureSignInsFasterAndMoreSecureByUsingAPasskeyPPAddAPasskeyAsYour2FAMethodToSkipTheNewDeviceApprovalNextTimeYouSignInLearnMoreLinkLearnMoreLearnMoreLinkP",
                    components: {
                        p: (0,
                        r.jsx)(a.x, {
                            as: "p",
                            type: "body1",
                            tone: "neutral",
                            spacingBottom: 7
                        }),
                        LearnMoreLink: (0,
                        r.jsx)(u, {
                            type: s._ ? void 0 : "label2",
                            href: A.learnAboutPasskeys
                        })
                    },
                    opts: S,
                    values: l
                }),
                "This password was exposed in a non-Kraken data breach. Please create a different password.": y("AccountsSettingsWeb.ThisPasswordWasExposedInANonKrakenDataBreachPleaseCreateADifferentPassword"),
                "Learn more": y("AccountsSettingsWeb.LearnMore"),
                "Your security requires an upgrade": y("AccountsSettingsWeb.YourSecurityRequiresAnUpgrade"),
                "You're using an outdated sign-in 2FA method that needs to be updated. Please update it with one of the following options:": y("AccountsSettingsWeb.YouReUsingAnOutdatedSignIn2FAMethodThatNeedsToBeUpdatedPleaseUpdateItWithOneOfTheFollowingOptions"),
                "Complete this step before {{endDate}} to keep using your Kraken account.": e => y("AccountsSettingsWeb.CompleteThisStepBeforeEndDateToKeepUsingYourKrakenAccount", (0,
                o.EZ)((0,
                o.ih)({}, e), {
                    interpolation: {
                        escapeValue: !1
                    }
                })),
                "Uses device biometrics or a hardware security key to sign in safely and quickly all while protecting your account from phishing.": y("AccountsSettingsWeb.UsesDeviceBiometricsOrAHardwareSecurityKeyToSignInSafelyAndQuicklyAllWhileProtectingYourAccountFromPhishing"),
                "Uses a one-time code from an app like Google Authenticator or Authy.": y("AccountsSettingsWeb.UsesAOneTimeCodeFromAnAppLikeGoogleAuthenticatorOrAuthy"),
                "Thank you for updating your 2FA": y("AccountsSettingsWeb.ThankYouForUpdatingYour2FA"),
                "You can review your account security settings anytime and add more passkeys for more flexibility or as backups.": y("AccountsSettingsWeb.YouCanReviewYourAccountSecuritySettingsAnytimeAndAddMorePasskeysForMoreFlexibilityOrAsBackups"),
                "Copy code": y("AccountsSettingsWeb.CopyCode"),
                "Get an authenticator app": y("AccountsSettingsWeb.GetAnAuthenticatorApp"),
                "Download and install on your mobile device an app such as Google Authenticator or Authy.": y("AccountsSettingsWeb.DownloadAndInstallOnYourMobileDeviceAnAppSuchAsGoogleAuthenticatorOrAuthy"),
                "Copy the code above": y("AccountsSettingsWeb.CopyTheCodeAbove"),
                "Copy the key and manually paste it into your authenticator app or scan the QR code.": y("AccountsSettingsWeb.CopyTheKeyAndManuallyPasteItIntoYourAuthenticatorAppOrScanTheQRCode"),
                "Enter the authentication code": y("AccountsSettingsWeb.EnterTheAuthenticationCode"),
                "On the next screen, you will be asked to enter the code generated by your authenticator app.": y("AccountsSettingsWeb.OnTheNextScreenYouWillBeAskedToEnterTheCodeGeneratedByYourAuthenticatorApp"),
                "Enter the authentication code. It’s the six-digit code generated by your authenticator app.": y("AccountsSettingsWeb.EnterTheAuthenticationCodeItSTheSixDigitCodeGeneratedByYourAuthenticatorApp"),
                Submit: y("AccountsSettingsWeb.Submit"),
                "Update your sign-in 2FA": y("AccountsSettingsWeb.UpdateYourSignIn2FA"),
                "You're using an outdated sign-in 2FA method that needs updating. Please update it by {{endDate}} to maintain access to your account.": e => y("AccountsSettingsWeb.YouReUsingAnOutdatedSignIn2FAMethodThatNeedsUpdatingPleaseUpdateItByEndDateToMaintainAccessToYourAccount", (0,
                o.EZ)((0,
                o.ih)({}, e), {
                    interpolation: {
                        escapeValue: !1
                    }
                })),
                Update: y("AccountsSettingsWeb.Update"),
                "Security update": y("AccountsSettingsWeb.SecurityUpdate"),
                Back: y("AccountsSettingsWeb.Back"),
                "You're using an outdated sign-in 2FA method that needs to be updated. Please update it with one of the following options. <LearnMoreLink>Learn more</LearnMoreLink>": (0,
                r.jsx)(b, {
                    legacyI18nKey: "AccountsSettingsWeb.YouReUsingAnOutdatedSignIn2FAMethodThatNeedsToBeUpdatedPleaseUpdateItWithOneOfTheFollowingOptionsLearnMoreLinkLearnMoreLearnMoreLink",
                    components: {
                        LearnMoreLink: (0,
                        r.jsx)(u, {
                            href: A.learnAboutTfaUpgrade,
                            type: (s._,
                            "label1")
                        })
                    },
                    opts: S,
                    values: l
                }),
                "You're using an outdated sign-in 2FA method that needs to be updated. Please deactivate GSL (Global Settings Lock) first in order to add a passkey or authenticator app later.": y("AccountsSettingsWeb.YouReUsingAnOutdatedSignIn2FAMethodThatNeedsToBeUpdatedPleaseDeactivateGSLGlobalSettingsLockFirstInOrderToAddAPasskeyOrAuthenticatorAppLater"),
                "Deactivate GSL": y("AccountsSettingsWeb.DeactivateGSL"),
                "GSL is deactivating. When your account settings are unlocked, you will be able to add a passkey or authenticator app to update your outdated sign-in 2FA method.": y("AccountsSettingsWeb.GSLIsDeactivatingWhenYourAccountSettingsAreUnlockedYouWillBeAbleToAddAPasskeyOrAuthenticatorAppToUpdateYourOutdatedSignIn2FAMethod"),
                "Wait for GSL to deactivate": y("AccountsSettingsWeb.WaitForGSLToDeactivate"),
                "If you don’t want to wait, you can unlock your account settings immediately by using your Master Key.": y("AccountsSettingsWeb.IfYouDonTWantToWaitYouCanUnlockYourAccountSettingsImmediatelyByUsingYourMasterKey"),
                "You're using an outdated sign-in 2FA method that needs updating. Please update it to maintain access to your account.": y("AccountsSettingsWeb.YouReUsingAnOutdatedSignIn2FAMethodThatNeedsUpdatingPleaseUpdateItToMaintainAccessToYourAccount"),
                "Complete this step to keep using your Kraken account.": y("AccountsSettingsWeb.CompleteThisStepToKeepUsingYourKrakenAccount"),
                "You're using an outdated sign-in 2FA method that needs to be updated. Please deactivate GSL (Global Settings Lock) first in order to add a passkey or authenticator app later. <LearnMoreLink>Learn more</LearnMoreLink>": (0,
                r.jsx)(b, {
                    legacyI18nKey: "AccountsSettingsWeb.YouReUsingAnOutdatedSignIn2FAMethodThatNeedsToBeUpdatedPleaseDeactivateGSLGlobalSettingsLockFirstInOrderToAddAPasskeyOrAuthenticatorAppLaterLearnMoreLinkLearnMoreLearnMoreLink",
                    components: {
                        LearnMoreLink: (0,
                        r.jsx)(u, {
                            href: A.learnAboutTfaUpgrade,
                            type: (s._,
                            "label1")
                        })
                    },
                    opts: S,
                    values: l
                }),
                "GSL is deactivating. When your account settings are unlocked, you will be able to add a passkey or authenticator app to update your outdated sign-in 2FA method. <LearnMoreLink>Learn more</LearnMoreLink>": (0,
                r.jsx)(b, {
                    legacyI18nKey: "AccountsSettingsWeb.YouReUsingAnOutdatedSignIn2FAMethodThatNeedsToBeUpdatedPleaseDeactivateGSLGlobalSettingsLockFirstInOrderToAddAPasskeyOrAuthenticatorAppLaterLearnMoreLinkLearnMoreLearnMoreLink",
                    components: {
                        LearnMoreLink: (0,
                        r.jsx)(u, {
                            href: A.learnAboutTfaUpgrade,
                            type: (s._,
                            "label1")
                        })
                    },
                    opts: S,
                    values: l
                }),
                "Secure your account": y("AccountsSettingsWeb.SecureYourAccount"),
                "Your account does not have Sign-in 2FA enabled, leaving your high balance at risk.": y("AccountsSettingsWeb.YourAccountDoesNotHaveSignIn2FAEnabledLeavingYourHighBalanceAtRisk"),
                "Your account does not have Sign-in 2FA enabled, leaving your high balance at risk. We strongly recommend enabling it by selecting one of the methods below. <LearnMoreLink>Learn more</LearnMoreLink>": (0,
                r.jsx)(b, {
                    legacyI18nKey: "AccountsSettingsWeb.YourAccountDoesNotHaveSignIn2FAEnabledLeavingYourHighBalanceAtRiskWeStronglyRecommendEnablingItBySelectingOneOfTheMethodsBelowLearnMoreLinkLearnMoreLearnMoreLink",
                    components: {
                        LearnMoreLink: (0,
                        r.jsx)(u, {
                            href: A.learnMoreAboutMultipleTfa,
                            type: (s._,
                            "label1")
                        })
                    },
                    opts: S,
                    values: l
                }),
                "Kraken cannot be held responsible for any loss resulting from lack of 2FA.": y("AccountsSettingsWeb.KrakenCannotBeHeldResponsibleForAnyLossResultingFromLackOf2FA"),
                "It’s not possible to use the same code twice. Please wait for a new code.": y("AccountsSettingsWeb.ItSNotPossibleToUseTheSameCodeTwicePleaseWaitForANewCode"),
                "GSL is deactivating. When your account settings are unlocked, you will be able to add a passkey or authenticator app. <LearnMoreLink>Learn more</LearnMoreLink>": (0,
                r.jsx)(b, {
                    legacyI18nKey: "AccountsSettingsWeb.GSLIsDeactivatingWhenYourAccountSettingsAreUnlockedYouWillBeAbleToAddAPasskeyOrAuthenticatorAppLearnMoreLinkLearnMoreLearnMoreLink",
                    components: {
                        LearnMoreLink: (0,
                        r.jsx)(u, {
                            href: A.learnAboutTfaUpgrade,
                            type: (s._,
                            "label1")
                        })
                    },
                    opts: S,
                    values: l
                }),
                "Your account does not have Sign-in 2FA enabled, leaving your high balance at risk. Please deactivate GSL (Global Settings Lock) first in order to add a passkey or authenticator app later. <LearnMoreLink>Learn more</LearnMoreLink>": (0,
                r.jsx)(b, {
                    legacyI18nKey: "AccountsSettingsWeb.YourAccountDoesNotHaveSignIn2FAEnabledLeavingYourHighBalanceAtRiskPleaseDeactivateGSLGlobalSettingsLockFirstInOrderToAddAPasskeyOrAuthenticatorAppLaterLearnMoreLinkLearnMoreLearnMoreLink",
                    components: {
                        LearnMoreLink: (0,
                        r.jsx)(u, {
                            href: A.learnAboutTfaUpgrade,
                            type: (s._,
                            "label1")
                        })
                    },
                    opts: S,
                    values: l
                }),
                "To comply with UK FCA regulations, you have to enable 2FA. Please deactivate GSL (Global Settings Lock) first in order to add a passkey or authenticator app later. <LearnMoreLink>Learn more</LearnMoreLink>": (0,
                r.jsx)(b, {
                    legacyI18nKey: "AccountsSettingsWeb.ToComplyWithUKFCARegulationsYouHaveToEnable2FAPleaseDeactivateGSLGlobalSettingsLockFirstInOrderToAddAPasskeyOrAuthenticatorAppLaterLearnMoreLinkLearnMoreLearnMoreLink",
                    components: {
                        LearnMoreLink: (0,
                        r.jsx)(u, {
                            href: A.learnAboutTfaUpgrade,
                            type: (s._,
                            "label1")
                        })
                    },
                    opts: S,
                    values: l
                }),
                "Secure your account with Sign-in 2FA": y("AccountsSettingsWeb.SecureYourAccountWithSignIn2FA"),
                "Contact Support": y("AccountsSettingsWeb.ContactSupport"),
                "Your account does not have Sign-in 2FA enabled, leaving your high balance at risk. This will soon be a requirement, so please enable 2FA using one of the methods below. <LearnMoreLink>Learn more</LearnMoreLink>": (0,
                r.jsx)(b, {
                    legacyI18nKey: "AccountsSettingsWeb.YourAccountDoesNotHaveSignIn2FAEnabledLeavingYourHighBalanceAtRiskThisWillSoonBeARequirementSoPleaseEnable2FAUsingOneOfTheMethodsBelowLearnMoreLinkLearnMoreLearnMoreLink",
                    components: {
                        LearnMoreLink: (0,
                        r.jsx)(u, {
                            href: A.learnMoreAboutMultipleTfa,
                            type: "label1"
                        })
                    },
                    opts: S,
                    values: l
                }),
                "Your account does not have Sign-in 2FA enabled, leaving your high balance at risk. To comply with UK FCA regulations, you have to enable 2FA with one of the methods below. <LearnMoreLink>Learn more</LearnMoreLink>": (0,
                r.jsx)(b, {
                    legacyI18nKey: "AccountsSettingsWeb.YourAccountDoesNotHaveSignIn2FAEnabledLeavingYourHighBalanceAtRiskToComplyWithUKFCARegulationsYouHaveToEnable2FAWithOneOfTheMethodsBelowLearnMoreLinkLearnMoreLearnMoreLink",
                    components: {
                        LearnMoreLink: (0,
                        r.jsx)(u, {
                            href: A.learnMoreAboutMultipleTfa,
                            type: "label1"
                        })
                    },
                    opts: S,
                    values: l
                }),
                "Your account does not have Sign-in 2FA enabled, leaving your balance at risk. To protect your funds, please secure your account with one of the methods below. <LearnMoreLink>Learn more</LearnMoreLink>": (0,
                r.jsx)(b, {
                    legacyI18nKey: "AccountsSettingsWeb.YourAccountDoesNotHaveSignIn2FAEnabledLeavingYourBalanceAtRiskToProtectYourFundsPleaseSecureYourAccountWithOneOfTheMethodsBelowLearnMoreLinkLearnMoreLearnMoreLink",
                    components: {
                        LearnMoreLink: (0,
                        r.jsx)(u, {
                            href: A.learnMoreAboutMultipleTfa,
                            type: "label1"
                        })
                    },
                    opts: S,
                    values: l
                }),
                "Kraken Sign in": y("AccountsSettingsWeb.KrakenSignIn"),
                "Please make sure iOS universal links are enabled for Kraken.com on your device. <LearnMoreLink>Learn more</LearnMoreLink>": (0,
                r.jsx)(b, {
                    legacyI18nKey: "AccountsSettingsWeb.PleaseMakeSureIOSUniversalLinksAreEnabledForKrakenComOnYourDeviceLearnMoreLinkLearnMoreLearnMoreLink",
                    components: {
                        LearnMoreLink: (0,
                        r.jsx)(u, {
                            type: "label1",
                            href: A.learnMoreAboutAppLinksAndUniversalLinks
                        })
                    },
                    opts: S,
                    values: l
                }),
                "Please make sure Android app links are enabled for Kraken.com on your device. <LearnMoreLink>Learn more</LearnMoreLink>": (0,
                r.jsx)(b, {
                    legacyI18nKey: "AccountsSettingsWeb.PleaseMakeSureAndroidAppLinksAreEnabledForKrakenComOnYourDeviceLearnMoreLinkLearnMoreLearnMoreLink",
                    components: {
                        LearnMoreLink: (0,
                        r.jsx)(u, {
                            type: "label1",
                            href: A.learnMoreAboutAppLinksAndUniversalLinks
                        })
                    },
                    opts: S,
                    values: l
                }),
                "There was a problem redirecting you back to the Kraken app.": y("AccountsSettingsWeb.ThereWasAProblemRedirectingYouBackToTheKrakenApp"),
                "Go to Kraken.com": y("AccountsSettingsWeb.GoToKrakenCom"),
                "Protection preferences": y("AccountsSettingsWeb.ProtectionPreferences"),
                TwoFactorPermissions: {
                    "Sign-in access to your account": y("AccountsSettingsWeb.TwoFactorPermissions.SignInAccessToYourAccount"),
                    "Changes to settings": y("AccountsSettingsWeb.TwoFactorPermissions.ChangesToSettings"),
                    Withdrawals: y("AccountsSettingsWeb.TwoFactorPermissions.Withdrawals"),
                    "Creating new orders": y("AccountsSettingsWeb.TwoFactorPermissions.CreatingNewOrders"),
                    "Closing of existing positions": y("AccountsSettingsWeb.TwoFactorPermissions.ClosingOfExistingPositions"),
                    "Order cancellations": y("AccountsSettingsWeb.TwoFactorPermissions.OrderCancellations"),
                    "Recover your account": y("AccountsSettingsWeb.TwoFactorPermissions.RecoverYourAccount"),
                    "Deposit funds": y("AccountsSettingsWeb.TwoFactorPermissions.DepositFunds")
                },
                "Critical actions": y("AccountsSettingsWeb.CriticalActions"),
                Funding: y("AccountsSettingsWeb.Funding"),
                Trading: y("AccountsSettingsWeb.Trading"),
                "Protect: sign-ins, settings changes and other sensitive actions": y("AccountsSettingsWeb.ProtectSignInsSettingsChangesAndOtherSensitiveActions"),
                "Protect: funding, trading, sign-ins, settings changes and other sensitive actions": y("AccountsSettingsWeb.ProtectFundingTradingSignInsSettingsChangesAndOtherSensitiveActions"),
                "Manually assign specific actions to specific 2FA methods": y("AccountsSettingsWeb.ManuallyAssignSpecificActionsToSpecific2FAMethods"),
                "All actions": y("AccountsSettingsWeb.AllActions"),
                Custom: y("AccountsSettingsWeb.Custom"),
                "Custom 2FA protection preferences": y("AccountsSettingsWeb.Custom2FAProtectionPreferences"),
                "Manually assign specific 2FA methods to specific actions <LearnMoreLink>Learn more</LearnMoreLink>.": (0,
                r.jsx)(b, {
                    legacyI18nKey: "AccountsSettingsWeb.ManuallyAssignSpecific2FAMethodsToSpecificActionsLearnMoreLinkLearnMoreLearnMoreLink",
                    components: {
                        LearnMoreLink: (0,
                        r.jsx)(u, {
                            type: "label1",
                            href: A.learnMoreAboutMultipleTfa
                        })
                    },
                    opts: S,
                    values: l
                }),
                "Critical actions 2FA preferences updated successfully": y("AccountsSettingsWeb.CriticalActions2FAPreferencesUpdatedSuccessfully"),
                "All actions 2FA preferences updated successfully": y("AccountsSettingsWeb.AllActions2FAPreferencesUpdatedSuccessfully"),
                "Custom 2FA preferences updated successfully": y("AccountsSettingsWeb.Custom2FAPreferencesUpdatedSuccessfully"),
                "Failed to update critical actions 2FA preferences. Please try again.": y("AccountsSettingsWeb.FailedToUpdateCriticalActions2FAPreferencesPleaseTryAgain"),
                "Failed to update all actions 2FA preferences. Please try again.": y("AccountsSettingsWeb.FailedToUpdateAllActions2FAPreferencesPleaseTryAgain"),
                "Failed to update custom 2FA preferences. Please try again.": y("AccountsSettingsWeb.FailedToUpdateCustom2FAPreferencesPleaseTryAgain"),
                "Enable 2FA": y("AccountsSettingsWeb.Enable2FA"),
                "FCA regulations require you to secure your account with two-factor authentication (2FA).": y("AccountsSettingsWeb.FCARegulationsRequireYouToSecureYourAccountWithTwoFactorAuthentication2FA"),
                "Verify device": y("AccountsSettingsWeb.VerifyDevice"),
                "We've detected that you're using a new device.": y("AccountsSettingsWeb.WeVeDetectedThatYouReUsingANewDevice"),
                "Some actions may require additional verification. Verify your device to remove these restrictions.": y("AccountsSettingsWeb.SomeActionsMayRequireAdditionalVerificationVerifyYourDeviceToRemoveTheseRestrictions"),
                "Your request is under review": y("AccountsSettingsWeb.YourRequestIsUnderReview"),
                "This may take up to 3 days. You can verify this device yourself in just a few minutes.": y("AccountsSettingsWeb.ThisMayTakeUpTo3DaysYouCanVerifyThisDeviceYourselfInJustAFewMinutes"),
                "Trusted passkeys": y("AccountsSettingsWeb.TrustedPasskeys"),
                "To protect your account, only verified passkeys can perform certain actions. Passkeys are automatically verified after consistent use.": y("AccountsSettingsWeb.ToProtectYourAccountOnlyVerifiedPasskeysCanPerformCertainActionsPasskeysAreAutomaticallyVerifiedAfterConsistentUse"),
                "Verify with passkey": y("AccountsSettingsWeb.VerifyWithPasskey"),
                "Continue without passkey": y("AccountsSettingsWeb.ContinueWithoutPasskey"),
                "Device successfully verified": y("AccountsSettingsWeb.DeviceSuccessfullyVerified"),
                "Device verification failed. Please try again": y("AccountsSettingsWeb.DeviceVerificationFailedPleaseTryAgain"),
                "Passkey verification failed": y("AccountsSettingsWeb.PasskeyVerificationFailed"),
                "Please try again or continue without passkey.": y("AccountsSettingsWeb.PleaseTryAgainOrContinueWithoutPasskey"),
                "Password reset required": y("AccountsSettingsWeb.PasswordResetRequired"),
                "Your password does not meet the current security requirements and must be updated. A system email with reset instructions has been sent to your registered email address. Please check your inbox.": y("AccountsSettingsWeb.YourPasswordDoesNotMeetTheCurrentSecurityRequirementsAndMustBeUpdatedASystemEmailWithResetInstructionsHasBeenSentToYourRegisteredEmailAddressPleaseCheckYourInbox")
            }
        }
    },
    43367: function(e, t, n) {
        "use strict";
        n.d(t, {
            x: function() {
                return u
            }
        });
        var o = n(27361);
        n(41609);
        var s = n(67294)
          , i = n(17599)
          , a = n(40793)
          , r = n(34155)
          , c = e => {
            (0,
            s.useEffect)( () => {
                void 0 === r || r.env
            }
            , [e])
        }
          , u = () => {
            let e = (0,
            i.Cq)()
              , t = (0,
            s.useMemo)( () => (0,
            a.FC)(e), [e]);
            c(t);
            let n = (0,
            s.useCallback)(function(e) {
                for (var n = arguments.length, s = Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++)
                    s[i - 1] = arguments[i];
                let a = o(t, e.split(" |> "));
                return "function" == typeof a ? a(...s) : a
            }, [t]);
            return (0,
            s.useMemo)( () => ({
                legacyT: n
            }), [n])
        }
    }
}]);
