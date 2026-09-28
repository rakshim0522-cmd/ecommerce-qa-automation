\# Bug Report



\## Purpose



This document defines the standard format for reporting defects identified during testing of the e-commerce application.



\## Bug Report Format



| Field              | Description                                      |

| ------------------ | ------------------------------------------------ |

| Bug ID             | Unique identifier for the defect                 |

| Title              | Short description of the defect                  |

| Description        | Detailed explanation of the issue                |

| Module             | Application area where the issue occurs          |

| Environment        | Browser, OS, application environment             |

| Preconditions      | Conditions required before reproducing the issue |

| Steps to Reproduce | Steps required to reproduce the defect           |

| Expected Result    | Expected application behavior                    |

| Actual Result      | Actual application behavior                      |

| Severity           | Impact of the defect                             |

| Priority           | Urgency for fixing the defect                    |

| Status             | Current defect status                            |

| Evidence           | Screenshot, video, log, or report                |



\## Example Bug Report



\### BUG-001 — Incorrect Cart Total



\*\*Module:\*\* Shopping Cart



\*\*Severity:\*\* Medium



\*\*Priority:\*\* High



\*\*Environment:\*\* Chromium



\*\*Precondition:\*\* User is logged in and has added a product to the cart.



\*\*Steps to Reproduce:\*\*



1\. Log in to the application.

2\. Add a product to the cart.

3\. Open the cart.

4\. Proceed to checkout.

5\. Compare the displayed total with the expected total.



\*\*Expected Result:\*\*



The displayed cart/order total should match the expected calculation.



\*\*Actual Result:\*\*



The displayed total differs from the expected calculation.



\*\*Status:\*\* Example



\*\*Evidence:\*\*



Attach the relevant screenshot, Playwright report, or test execution evidence.



\## Severity Guidelines



| Severity | Description                                                |

| -------- | ---------------------------------------------------------- |

| Critical | Application or major business functionality is unavailable |

| High     | Major functionality is significantly affected              |

| Medium   | Functionality is affected but a workaround may exist       |

| Low      | Minor functional or UI issue                               |



\## Priority Guidelines



| Priority | Description                                            |

| -------- | ------------------------------------------------------ |

| High     | Should be fixed immediately or in the current release  |

| Medium   | Should be fixed in the planned release                 |

| Low      | Can be addressed based on available time and resources |



