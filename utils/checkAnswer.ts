
export function checkAnswer(userResponse: string, correctResponse: string) {
  const cleanedUserReponse = userResponse.replace("<p>", '').replace("</p>", '');
  console.log({
    cleanedUserReponse, correctResponse
  });
  return cleanedUserReponse === correctResponse;
}