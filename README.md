# Google Cloud Functions Example 1

## Code History

The code in this repository is based on the
[GOOGLE CLOUD FUNCTIONS TUTORIAL FOR BEGINNERS USING NODE.JS](https://youtu.be/RV6wTVN7Z98)
video.

- create project cj-helloworld-ex from dashboard at https://console.cloud.google.com/
- select "create cloud function" from the GUI of the project create above

  - select "create functions" and press "enable" to enable some apis
  - https://us-central1-cj-helloworld-ex1.cloudfunctions.net/function-1
  - click "save" then "next"
  - edit and test function

  ### Local Development

```bash
npm init -y
npm install -D @google-cloud/functions-framework
curl https://sdk.cloud.google.com | bash
gcloud init
# enable gcloudbuild API which enables billing on the account
gcloud functions deploy gcp-func-hello2 --entry-point hey --runtime nodejs14 --trigger-http --project cj-helloworld-ex2
# below is the url of the function installation
# https://us-central1-cj-helloworld-ex2.cloudfunctions.net/gcp-func-hello2
```
