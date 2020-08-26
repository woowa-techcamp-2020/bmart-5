// Email Rex
export const EMAIL_REX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

// Name Rex
// 한글은 2 ~ 4글자(공백 없음), 영문은 Firstname(2 ~ 10글자) (space) Lastname(2 ~10글자)
export const NAME_REX = /^[가-힣]{2,4}|[a-zA-Z]{2,10}\s[a-zA-Z]{2,10}$/;

// Password Rex
// 6~20 영문 대소문자, 최소 1개의 숫자 혹은 특수 문자를 포함
export const PW_REX = /^(?=.*[a-zA-Z])((?=.*\d)|(?=.*\W)).{6,20}$/;
