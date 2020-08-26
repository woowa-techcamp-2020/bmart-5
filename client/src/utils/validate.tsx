// import REGEX from '@shared/validate';

type TargetType = {
  type: string;
  value: string;
};

export const validateCheck = (target: TargetType) => {
  if (regex[target.type]['regex'].test(target.value)) {
    return;
  }
  return regex[target.type]['message'];
};

export const regex = {
  email: {
    regex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    message: '유효하지 않은 이메일 형식입니다.',
  },
  name: {
    regex: /^[가-힣]{2,4}|[a-zA-Z]{2,10}$/,
    message: '유효하지 않은 이름 형식입니다.',
  },
  password: {
    regex: /^(?=.*[a-zA-Z])((?=.*\d)|(?=.*\W)).{6,20}$/,
    message: '유효하지 않은 패스워드 형식입니다.',
  },
};

export default validateCheck;
