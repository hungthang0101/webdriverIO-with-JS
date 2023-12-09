import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class DashboardPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get patientNavigation () {
        return $("//body/div[@id='root']/div[@class='MuiBox-root css-13pmxen']/div[@class='MuiDrawer-root MuiDrawer-docked css-bpnhhg']/div[@class='MuiPaper-root MuiPaper-elevation MuiPaper-elevation0 MuiDrawer-paper MuiDrawer-paperAnchorLeft MuiDrawer-paperAnchorDockedLeft css-1l8j5k8']/ul[@class='MuiList-root MuiList-padding css-1ontqvh']/li[2]/div[1]");
    }

    public get btnInvitePatient () {
        return $("//button[normalize-space()='Invite Patient']");
    }
}

export default new DashboardPage();
