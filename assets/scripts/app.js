const btnSignIn = document.querySelector('#btn-signin');
const btnUserProfSave = document.querySelector('#btn-UserProfSave');
const btnFollowUpDone = document.querySelector('#btn-FollowUpDone');
const btnTownReportDone = document.querySelector('#btn-TownReportDone');



btnSignInHandler = () => {
    alert('Welcome!');
};

btnUserProfSaveHandler = () => {
    alert('New password has been saved.');
};

btnFollowUpDoneHandler = () => {
    alert('Follow-up submitted.');
};

btnTownReportDoneHandler = () => {
    alert('Finished town submitted.');
};


btnSignIn.addEventListener("click", btnSignInHandler);
btnUserProfSave.addEventListener("click", btnUserProfSaveHandler);
btnFollowUpDone.addEventListener("click", btnFollowUpDoneHandler);
btnTownReportDone.addEventListener("click", btnTownReportDoneHandler);

