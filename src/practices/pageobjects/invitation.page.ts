import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */


class InvitationPage extends Page {
    /**
     * define selectors using getter methods
     */

    public get pageTitle() {
        return $('/html/head/title')
    }


    /**
     * define selectors using getter methods
     */
     public getLocator (xpath) {
        return $(xpath);
    }

    public get lbTitleOfPage(){
        return $('//div[@class="PatientInvitation_title__1e812"]')
    }

    public get lbTitleOfStep1(){
        return $('//p[normalize-space()="Step 1: Enter Patient Information"]')
    }

    public get lbTitleOfStep2(){
        return $('//p[normalize-space()="Step 2: Send Invitation"]')
    }
    
    public get dtmDOB () {
        return $('#:ra:');
    }

    public get rbGender () {
        return $('//div[@aria-haspopup="listbox" and @aria-labelledby="gender"]');
    }

    public get btnSendInvitation () {
        return $("//button[normalize-space()='Send Invitation']");
    }

    public get lbErrMessagePatientName () {
        return $("//input[@id='patientName']/../../../../p");
    }
    
    public get lbErrMessageEmail () {
        return $("//input[@id='email']/../../../../p");
    }

    public get lbErrMessagePhoneNumber () {
        return $("//input[@id='phoneNumber']/../../../../p");
    }


    /**
     * overwrite specific options to adapt it to page object
     */
    public open () {
        return super.open('/patients/invitation');
    }
}

export default new InvitationPage();
