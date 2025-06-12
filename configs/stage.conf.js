// Refer to the online docs for more details:
// https://nightwatchjs.org/gettingstarted/configuration/
//

//  _   _  _         _      _                     _          _
// | \ | |(_)       | |    | |                   | |        | |
// |  \| | _   __ _ | |__  | |_ __      __  __ _ | |_   ___ | |__
// | . ` || | / _` || '_ \ | __|\ \ /\ / / / _` || __| / __|| '_ \
// | |\  || || (_| || | | || |_  \ V  V / | (_| || |_ | (__ | | | |
// \_| \_/|_| \__, ||_| |_| \__|  \_/\_/   \__,_| \__| \___||_| |_|
//             __/ |
//            |___/

const timestamp = new Date().toISOString().replace(/[/:]/g, '-');
const timestamp2 = timestamp.replace(/[^0-9Z.]/g, "");
const buildId = timestamp2.replace(/\..*Z$/, "").replace(/\./g, "");

module.exports = {
    // abortOnElementLocateError: true,

    globals: {

        adminPortal: 'https://api-staging.tributebook.com/admin',
        adminUsername: "admin",
        adminPassword: "hMFG39Ms",
        // adminPassword: "llll",   
        guestBookURL: 'https://www-staging.tributebook.com/domains/0fb0b5d6b70e4807a7d215e83214f314/obituaries/23049660/book',

        shipping_firstName: "Nicki",
        shipping_lastName: "Minaj",
        shipping_address: "1725 Slough Avenue, Suite 200",
        shipping_apartment: "203",
        shipping_city: "Scranton",
        shipping_country: "United States",
        shipping_state: "WISCONSIN",
        shipping_zipCode: "53003",
        shipping_email: "marina.adperfect@gmail.com",

        billing_cardNumber: "4242424242424242",
        billing_cardCVC: "442",
        billing_cardExperationDate: "1242",
        billing_country: "United States",
        billing_Name: "Nicki Minaj",
        billing_zipCode: "222222",

        signGuestbook_name: "James Smith",
        signGuestbook_email: "marina.adperfect@gmail.com",
        signGuestbook_address: "1725 Slough Avenue, Suite 200",
        signGuestbook_city: "Arlington",
        signGuestbook_state: "VIRGINIA",
        signGuestbook_zipCode: "22047",

        addAMemory_firstname: "Jack",
        addAMemory_lastname: "Reagon",
        addAMemory_email: "test@test.test",
        addMemory_relation: "Friend",
        addMemory_photo: "/Users/marinakalashnikova/Desktop/test_img/flower.png",
        // addMemory_photo:"/Users/iliakhripkov-samarakovski/Desktop/test-data/images/image4.png",




        recipientName: "Jo",
        form: "",
        cardMessage: "",

    },


    // An array of folders (excluding subfolders) where your tests are located;
    // if this is not specified, the test source must be passed as the second argument to the test runner.
    src_folders: ['tests'],

    // See https://nightwatchjs.org/guide/concepts/page-object-model.html
    page_objects_path: ["tests/elements/"],

    // See https://nightwatchjs.org/guide/extending-nightwatch/adding-custom-commands.html
    custom_commands_path: [],

    // See https://nightwatchjs.org/guide/extending-nightwatch/adding-custom-assertions.html
    custom_assertions_path: [],

    // See https://nightwatchjs.org/guide/extending-nightwatch/adding-plugins.html
    plugins: [],

    // See https://nightwatchjs.org/guide/concepts/test-globals.html
    globals_path: '',

    webdriver: {},

    test_workers: {
        enabled: true
    },




    test_settings: {
        default: {
            'abortOnAssertionFailure': true,
            'abortOnElementLocateError': true,
            disable_error_log: false,
            launch_url: 'http://localhost',


            screenshots: {
                enabled: false,
                path: 'screens',
                on_failure: true
            },

            desiredCapabilities: {
                browserName: 'safari'
            },

            webdriver: {
                start_process: true,
                server_path: ''
            },

            test_runner: {
                // set cucumber as the runner
                // For more info on using CucumberJS with Nightwatch, visit:
                // https://nightwatchjs.org/guide/writing-tests/using-cucumberjs.html
                type: 'cucumber',

                // define cucumber specific options
                options: {
                    //set the feature path
                    feature_path: 'tests/features',

                    format: ['json:tests_output/cucumber.json'],
                    // start the webdriver session automatically (enabled by default)
                    // auto_start_session: true

                    // use parallel execution in Cucumber
                    // parallel: 2 // set number of workers to use (can also be defined in the cli as --parallel 2
                },
                abortOnElementLocateError: true,
            }
        },

        chrome: {
            desiredCapabilities: {
                browserName: 'chrome',
                'goog:chromeOptions': {
                    // More info on Chromedriver: https://sites.google.com/a/chromium.org/chromedriver/
                    //
                    // w3c:false tells Chromedriver to run using the legacy JSONWire protocol (not required in Chrome 78)
                    w3c: true,
                    args: [
                        //'--no-sandbox',
                        //'--ignore-certificate-errors',
                        //'--allow-insecure-localhost',
                        //'--headless'
                    ]
                }
            },

            webdriver: {
                start_process: true,
                server_path: '',
                cli_args: [
                    // --verbose
                ]
            }
        },


        chrome_headless: {
            desiredCapabilities: {
                browserName: 'chrome',
                chromeOptions: {
                    args: ['--headless', '--no-sandbox', '--disable-gpu', '--window-size=1920,1080']
                }
            }
        },



        safari: {
            desiredCapabilities: {
                browserName: "safari",
                alwaysMatch: {
                    acceptInsecureCerts: false
                }
            },
            webdriver: {
                start_process: true,
                server_path: ""
            }
        },



        edge: {
            desiredCapabilities: {
                browserName: "edge",
                alwaysMatch: {
                    acceptInsecureCerts: false
                }
            },
            webdriver: {
                start_process: true,
                server_path: ""
            }
        },




        firefox: {
            desiredCapabilities: {
                browserName: "firefox",
                alwaysMatch: {
                    acceptInsecureCerts: false
                }
            },
            webdriver: {
                start_process: true,
                server_path: ""
            }
        },
        //////////////////////////////////////////////////////////////////////////////////
        // Configuration for using the browserstack.com cloud service                    |
        //                                                                               |
        // Please set the username and access key by setting the environment variables:  |
        // - BROWSERSTACK_USERNAME                                                       |
        // - BROWSERSTACK_ACCESS_KEY                                                     |
        // .env files are supported                                                      |
        //////////////////////////////////////////////////////////////////////////////////
        browserstack: {
            selenium: {
                host: 'hub.browserstack.com',
                port: 443
            },
            // More info on configuring capabilities can be found on:
            // https://www.browserstack.com/automate/capabilities?tag=selenium-4
            desiredCapabilities: {
                'bstack:options': {
                    userName: 'gopalkrishnan_135jJu',
                    accessKey: '7ZkD4Lz5qXUuysQsvWrT',
                    browserVersion: "latest",
                }
            },

            disable_error_log: true,
            webdriver: {
                timeout_options: {
                    timeout: 5000,
                    retry_attempts: 1
                },
                keep_alive: true,
                start_process: false
            }
        },

        'browserstack.local': {
            extends: 'browserstack',
            desiredCapabilities: {
                'browserstack.local': true
            }
        },

        'browserstack.chrome': {
            extends: 'browserstack',
            desiredCapabilities: {
                browserName: 'chrome',
                'goog:chromeOptions': {
                    w3c: true
                }
            }
        },



        'dev_browserstack.safari.macOS': {
            extends: 'browserstack',
            desiredCapabilities: {
                browserName: 'Safari',
                browserVersion: '17.0',
                'bstack:options': {
                    os: 'OS X',
                    osVersion: 'Sonoma',
                    "buildName": "Tribute Book Safari MacOS",
                    'buildIdentifier': buildId,

                }

            }



        },



        'browserstack.chrome.macOS': {
            extends: 'browserstack',
            desiredCapabilities: {
                browserName: 'Chrome',
                browserVersion: '121',
                'bstack:options': {
                    os: 'OS X',
                    osVersion: 'Sonoma',
                    "buildName": "TB tests Chrome MacOS",

                    'buildIdentifier': buildId,
                }
            },

        },


        'browserstack.local_chrome': {
            extends: 'browserstack.local',
            desiredCapabilities: {
                browserName: 'chrome'
            }
        },



    },



};
