/* eslint-disable no-console */
const chalk = require('chalk');
const shelljs = require('shelljs');
const path = require('path');
const { homepage } = require('./package.json');

/**
 * * judge `CNAME` file
 */
function judgeCnameCreation() {
  if (!homepage) {
    console.error('shellwork: The homepage field in package.json is required.');
  }

  const githubIoRegex = /.+\.github\.io\/.+/;

  if (githubIoRegex.test(homepage)) {
    console.log(
      chalk.yellow(
        `shellwork: The homepage field in package.json is '${homepage}'. Consider github pages hosting and don't generate docs/CNAME file.`,
      ),
    );
    process.exit(0);
  }

  const url = new URL(homepage);

  console.log(
    chalk.yellow(
      `shellwork: The homepage field in package.json seems to have a custom domain. Create the '${url.hostname}' hostname in docs/CNAME.`,
    ),
  );

  shelljs.mkdir('-p', path.join(__dirname, 'docs'));
  shelljs.echo(url.hostname).to(path.join(__dirname, 'docs/CNAME'));
}

/**
 * * create docs/.nojekyll empty file
 */
function createNojekyll() {
  shelljs.mkdir('-p', path.join(__dirname, 'docs')); // ✅ 폴더 생성 추가
  shelljs.touch(path.join(__dirname, 'docs/.nojekyll'));
  console.log(chalk.yellow('shellwork: create docs/.nojekyll done.'));
}

createNojekyll();
judgeCnameCreation();
