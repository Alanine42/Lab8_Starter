# Lab 8 - Starter  -- Alan Sun, myself and I
1. I would fit my automated tests within a Github action that runs whenever code is pushed.  Programming is about automating, so automating the testing process is the better way to go. With Github action, I don't need to manually test every time I am about to push the codes. Convenience++
2. No. E2E testing simulates the user, who would not know what a function returns under the hood. You can use unit test for that purpose. 
3. No. Unit test only tests one function/feature in one user's end. Otherwise the test won't be called "unit". Instead, testing with users' interaction on the application level should be done with E2E testing.
4. Yes. The "limit max length" is a unit feature that can be implemented and checked without interfering with other features. It's small enough to be unit tested.