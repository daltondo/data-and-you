# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

# Setup
## Installing Ruby
```sh
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
brew install rbenv ruby-build

# Add rbenv to bash so that it loads every time you open a terminal
echo 'if which rbenv > /dev/null; then eval "$(rbenv init -)"; fi' >> ~/.bash_profile
source ~/.bash_profile

# Install Ruby
rbenv install 2.6.5
rbenv global 2.6.5
ruby -v
```

## Installing Rails
```s
# gem is a package manager for Ruby
gem install rails -v 6.0.0

# Rails is now installed, but in order for us to use the rails executable, we need to tell rbenv to see it:
rbenv rehash

rails -v # should output Rails 6.0.0
```

## Installing Heroku
```sh
brew tap heroku/brew && brew install heroku
```

## Setting Up A Database
```sh
# Rails ships with sqlite3 as the default database
# This will only be used locally
brew install sqlite3

# For production we will be using Postgres
brew install postgresql
# To have launchd start postgresql at login:
brew services start postgresql
```

## Final Steps
```sh
# Mojave changed the location of header files necessary for compiling C extensions. You might need to run the following command to install pg, nokogiri, or other gems that require C extensions
sudo installer -pkg /Library/Developer/CommandLineTools/Packages/macOS_SDK_headers_for_macOS_10.14.pkg -target /
```

# Starting up the Rails server
```sh
bin/rails s -p 3001
```
Local host: http://localhost:3001/

Local admin host: http://localhost:3001/admin (user: admin@example.com, pw: password)

# Starting up the React App
```sh
cd client
yarn --cwd client add semantic-ui-react semantic-ui-css # only need to run once
yarn --cwd client start
```
Frontend app: http://localhost:3000

# Starting up the dev env
```sh
bin/rake start
```

# Using Heroku
```sh
# when you want to push new changes to Heroku
git add .
git commit -vam "Initial commit"
git push heroku master

heroku run rake db:seed # seed database on Heroku
heroku open
```

# Resources
https://gorails.com/setup/osx/10.14-mojave

https://blog.heroku.com/a-rock-solid-modern-web-stack
