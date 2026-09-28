\# Test Cases



\## 1. Login Test Cases



\### TC-001 — Valid Login



\*\*Objective:\*\* Verify that a registered user can log in successfully.



\*\*Precondition:\*\* User is on the login page.



\*\*Test Data:\*\*



\* Username: Valid registered username

\* Password: Valid password



\*\*Steps:\*\*



1\. Open the application.

2\. Enter a valid username.

3\. Enter a valid password.

4\. Click the Login button.



\*\*Expected Result:\*\*

User should be successfully logged in and redirected to the application.



\---



\### TC-002 — Invalid Login



\*\*Objective:\*\* Verify that login fails with invalid credentials.



\*\*Steps:\*\*



1\. Open the application.

2\. Enter an invalid username.

3\. Enter an invalid password.

4\. Click the Login button.



\*\*Expected Result:\*\*

An appropriate login error message should be displayed and the user should not be logged in.



\---



\## 2. Product Test Cases



\### TC-003 — Verify Product Display



\*\*Objective:\*\* Verify that products are displayed correctly.



\*\*Steps:\*\*



1\. Log in successfully.

2\. Navigate to the products page.

3\. Verify that products are displayed.



\*\*Expected Result:\*\*

Available products should be displayed with the required product information.



\---



\### TC-004 — Verify Product Price



\*\*Objective:\*\* Verify that the product price is displayed correctly.



\*\*Steps:\*\*



1\. Open the products page.

2\. Select a product.

3\. Verify the product name and price.



\*\*Expected Result:\*\*

The product name and price should match the expected values.



\---



\## 3. Cart Test Cases



\### TC-005 — Add Product to Cart



\*\*Objective:\*\* Verify that a user can add a product to the shopping cart.



\*\*Steps:\*\*



1\. Log in.

2\. Open the products page.

3\. Select a product.

4\. Click Add to Cart.

5\. Open the cart.



\*\*Expected Result:\*\*

The selected product should be displayed in the cart.



\---



\### TC-006 — Verify Cart Total



\*\*Objective:\*\* Verify that the cart total is calculated correctly.



\*\*Steps:\*\*



1\. Add a product to the cart.

2\. Open the cart.

3\. Proceed to checkout.

4\. Verify the displayed total.



\*\*Expected Result:\*\*

The displayed total should match the expected product price and applicable charges.



\---



\## 4. Checkout Test Cases



\### TC-007 — Complete Checkout



\*\*Objective:\*\* Verify that a user can successfully complete checkout.



\*\*Steps:\*\*



1\. Log in.

2\. Add a product to the cart.

3\. Open the cart.

4\. Proceed to checkout.

5\. Enter the required checkout information.

6\. Continue with the checkout process.



\*\*Expected Result:\*\*

The user should be able to complete the checkout process successfully.



\---



\## 5. Order Test Cases



\### TC-008 — Verify Order Placement



\*\*Objective:\*\* Verify that an order can be placed successfully.



\*\*Steps:\*\*



1\. Log in.

2\. Add a product to the cart.

3\. Complete checkout.

4\. Confirm the order.



\*\*Expected Result:\*\*

The order should be successfully placed and an order confirmation should be displayed.



\---



\### TC-009 — Verify Order Total



\*\*Objective:\*\* Verify that the order total is correct.



\*\*Steps:\*\*



1\. Add the required product to the cart.

2\. Proceed through checkout.

3\. Capture the displayed order total.

4\. Compare it with the expected total.



\*\*Expected Result:\*\*

The displayed order total should match the expected calculation.



\---



\## 6. API Test Cases



\### TC-010 — Verify API Status Code



\*\*Objective:\*\* Verify that the API returns the expected HTTP status code.



\*\*Steps:\*\*



1\. Send the API request.

2\. Capture the response.

3\. Verify the HTTP status code.



\*\*Expected Result:\*\*

The API should return the expected status code.



\---



\### TC-011 — Verify API Response Data



\*\*Objective:\*\* Verify that the API response contains the required data.



\*\*Steps:\*\*



1\. Send the API request.

2\. Capture the response body.

3\. Validate required response fields.

4\. Compare the values with the expected data.



\*\*Expected Result:\*\*

The response should contain the required fields and correct values.



\---



\## 7. Database Test Cases



\### TC-012 — Verify Database Record



\*\*Objective:\*\* Verify that application data is stored correctly in the database.



\*\*Steps:\*\*



1\. Perform the required application operation.

2\. Connect to the SQLite database.

3\. Execute the required SQL query.

4\. Retrieve the stored record.

5\. Compare it with the expected application data.



\*\*Expected Result:\*\*

The database should contain the expected record and values.



\---



\### TC-013 — Verify UI and Database Data



\*\*Objective:\*\* Verify consistency between application data and database data.



\*\*Steps:\*\*



1\. Perform an operation through the UI.

2\. Capture the relevant UI data.

3\. Query the database.

4\. Compare the UI data with the database data.



\*\*Expected Result:\*\*

The UI and database values should match.



\---



\## 8. Integration Test Cases



\### TC-014 — UI → API → Database Validation



\*\*Objective:\*\* Verify data consistency across the UI, API, and database layers.



\*\*Steps:\*\*



1\. Perform an operation through the UI.

2\. Verify the corresponding API response.

3\. Query the database.

4\. Compare the data across all three layers.



\*\*Expected Result:\*\*

The operation should be successfully processed and the relevant data should remain consistent across UI, API, and database.



\---



\## Test Case Execution Status



| Test Case | Status |

| --------- | ------ |

| TC-001    | Passed |

| TC-002    | Passed |

| TC-003    | Passed |

| TC-004    | Passed |

| TC-005    | Passed |

| TC-006    | Passed |

| TC-007    | Passed |

| TC-008    | Passed |

| TC-009    | Passed |

| TC-010    | Passed |

| TC-011    | Passed |

| TC-012    | Passed |

| TC-013    | Passed |

| TC-014    | Passed |



> Note: The execution status should be updated based on the latest actual test run. The cases above represent the currently documented successful framework coverage.



