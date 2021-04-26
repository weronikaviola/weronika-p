#! /bin/bash

set -e;

echo "Looking for uncommited changes..."

trap 'echo -e "\033[0;31m🛑You have uncommited changes!🛑\033[0m"' ERR
git diff-index --quiet HEAD --
echo -e "\033[0;32mUNCHANGED\033[0m"

env=$1;
prod=0;
remote="heroku-staging";

if [ $env == "prod" ]
then
  prod=1;
  remote="heroku-prod"
fi

echo "Deploying app to $remote. 🚀🚀🚀";

npm run build;

git push ${remote} master;

echo "Done 🛬."
