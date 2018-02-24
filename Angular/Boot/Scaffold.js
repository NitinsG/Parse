/*

npm

When you install JavaScript packages using npm, it installs them, by default, locally within your project directory, 
but you can also install them globally (using the -g flag), which is useful for command-line apps like yo, gulp, bower.

Rules of thumb of when to use globally vs locally:

1. Install globally if the package provides command-line tools
2. Install locally if you’re using the package as part of your application
3. Install globally and locally if both use-cases apply

npm globally without root

The downside of globally installed packages is that you need to be root (or use sudo) to be able to install them if you don’t change the location where npm stores the global packages on your system. 

It is recommended that you configure npm to install global packages without the need of root privileges.

For this create a nomal user:

$ adduser username
$ usermod -aG sudo username  // sudo privileges
$ su - username

Create a new directory in your home directory, for example, where the globally installed packages will be stored:

$ mkdir "${HOME}/.npm-packages"

$ echo "prefix=${HOME}/.npm-packages" >> ~/.npmrc

Put below in .bashrc

NPM_PACKAGES="${HOME}/.npm-packages"
PATH="$NPM_PACKAGES/bin:$PATH"
# Unset manpath so we can inherit from /etc/manpath via the `manpath` command
unset MANPATH # delete if you already modified MANPATH elsewhere in your config
export MANPATH="$NPM_PACKAGES/share/man:$(manpath)"

$ source .bashrc

Then we’ll go to the command line and run the following command to install the tools of Yeoman:

$ npm install -g yo grunt-cli bower

$ which yo

$ npm install -g generator-angular

$ mkdir my-project && cd $_

$ yo angular

$ npm install grunt --save-dev

Add to package.json
"dependencies": {
    "time-grunt": "^1.3.0"
 },

$ npm install

$ bower install

$ grunt serve
*/
