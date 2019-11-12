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
```bash
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
```bash
# gem is a package manager for Ruby
gem install rails -v 6.0.0

# Rails is now installed, but in order for us to use the rails executable, we need to tell rbenv to see it:
rbenv rehash

rails -v # should output Rails 6.0.0
```

## Setting Up A Database
```bash
# Rails ships with sqlite3 as the default database
brew install sqlite3
```

## Final Steps
```bash
# Mojave changed the location of header files necessary for compiling C extensions. You might need to run the following command to install pg, nokogiri, or other gems that require C extensions
sudo installer -pkg /Library/Developer/CommandLineTools/Packages/macOS_SDK_headers_for_macOS_10.14.pkg -target /
```

# Starting up the Rails server
```bash
bin/rails s -p 3001
```
