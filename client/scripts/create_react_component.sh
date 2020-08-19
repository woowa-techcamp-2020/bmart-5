if [ -z "$*" ]; then
 echo "put argument with ComponentName"
 exit 0

fi

FOLDER="components/$1"
FILE_NAME=$2

cd .. 

echo "make directory 'src/${FOLDER}/${FILE_NAME}'"
mkdir src/${FOLDER}/${FILE_NAME}

# index.tsx
echo "create '${FILE_NAME}/index.tsx'"
echo "import { ${FILE_NAME} } from './${FILE_NAME}';\n\nexport default ${FILE_NAME};" > src/${FOLDER}/${FILE_NAME}/index.tsx

# react file
echo "create '${FILE_NAME}/${FILE_NAME}.tsx'"
echo "import React from 'react';
import * as S from './styled';

type Props = {};

export const ${FILE_NAME}: React.FC<Props> = (props) => {
  return <S.${FILE_NAME} />;
};
" > src/${FOLDER}/${FILE_NAME}/${FILE_NAME}.tsx

# styled file
echo "create 'styled.tsx'"
echo "import styled from 'styled-components';\n\nexport const ${FILE_NAME} = styled.div<{}>\`\`" > src/${FOLDER}/${FILE_NAME}/styled.tsx

# test file
echo "create '${FILE_NAME}/${FILE_NAME}.spec.tsx'"
echo "import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';

import { ${FILE_NAME} } from './${FILE_NAME}';

describe('<${FILE_NAME} />', () => {
  it('matches snapshot', () => {
    const { container } = render(<${FILE_NAME} />);
    expect(container).toMatchSnapshot();
  });

  it('shows the elemnts correctly', () => {
    const { getByText } = render(<${FILE_NAME} />);
    getByText('');
  });
});
" > src/${FOLDER}/${FILE_NAME}/${FILE_NAME}.spec.tsx
