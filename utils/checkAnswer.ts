
export function checkAnswer(userResponse: string, correctResponse: string) {
  const cleanedUserReponse = userResponse.replace("<p>", '').replace("</p>", '');
  return cleanedUserReponse === correctResponse;
}