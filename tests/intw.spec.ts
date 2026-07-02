import {test,expect} from '@playwright/test'

test('Login page demo',async({page})=>
{
   await page.goto('https://accounts.saucelabs.com/am/XUI/#login/');
   await page.getByRole('textbox',{name:'User Name'}).fill('standard');
   await page.getByRole('textbox',{name:'Password'}).fill('password');
   await page.getByRole('button',{name:'Log in',exact:true}).click();

});