import _throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('form.feedback-form');
const email = document.querySelector('[name="email"]');
const message = document.querySelector('[name="message"]');

const onInput = event => {

  const currentEmail = email.value.trim();
  const currentMessage = message.value.trim();
  const data = {
    email: currentEmail,
    message: currentMessage
  };
  localStorage.setItem("feedback-form-state", JSON.stringify(data));
}

const feedbackFormState = localStorage.getItem("feedback-form-state");
if (feedbackFormState) {
  const feedbackFormStateData = JSON.parse(feedbackFormState);

  email.value = feedbackFormStateData.email;
  message.value = feedbackFormStateData.message;
}

feedbackForm.addEventListener('input', _throttle(onInput, 500));
feedbackForm.addEventListener('submit', event => {
  event.preventDefault();
  feedbackForm.reset();
  const feedbackFormState = localStorage.getItem("feedback-form-state");
  if (feedbackFormState) {
    const feedbackFormStateData = JSON.parse(feedbackFormState);
    console.log(feedbackFormStateData);
    localStorage.removeItem("feedback-form-state");
  }
})






