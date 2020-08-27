import React from 'react';
import * as S from './styled';
import Link from 'next/link';
import LinkBox from '@components/atoms/LinkBox';
import { TokenUser } from '@commons/Context/Context';

type Props = { user: TokenUser | null };

export const MenuNavContainer: React.FC<Props> = ({ user }) => {
  return (
    <S.MenuNavContainer>
      <S.HomeNav>
        <Link href="/">
          <a>
            <span>B마트 홈</span>
            {'으로 가기 >'}
          </a>
        </Link>
      </S.HomeNav>
      {!user ? (
        <S.TwoRowNav>
          <LinkBox url="/signin" name="로그인" icon={'VscSignIn'} />
          <LinkBox url="/signup" name="회원가입" icon={'HiOutlineUserAdd'} />
        </S.TwoRowNav>
      ) : (
        <S.TwoRowNav>
          <LinkBox url="/cart" name="장바구니" icon={'Basket'} />
          <LinkBox url="/history" name="주문내역" icon={'RiFileListLine'} />
          <LinkBox url="/favorite" name="찜한상품" icon={'RegHeart'} />
        </S.TwoRowNav>
      )}
    </S.MenuNavContainer>
  );
};
