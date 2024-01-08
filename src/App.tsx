import { useCallback } from 'react';
import { css } from '#styled-system/css';
import { Grid, VStack, Square } from '#styled-system/jsx';
import { Button } from '#components/Button';
import Icon from '../public/vite.svg?react';
import './index.css';

function App() {
  const handlePress = useCallback(() => console.log('Hi'), []);
  return (
    <>
      <div className={css({ bg: 'blue' })}>Boop</div>
      <Grid columns={2} m="20px" gap="8px">
        <VStack bg="beige" borderRadius="36px" padding="32px" gap="4px">
          <Button size="sm" onPress={handlePress}>
            Click me
          </Button>
          <Button size="md" onPress={handlePress}>
            Click me
          </Button>
          <Button size="lg" onPress={handlePress}>
            Click me
          </Button>
        </VStack>
        <Square size="250px">
          <Icon height="100%" width="100%" display="block" />
        </Square>
        <VStack gap="4px">
          <Button variant="secondary" size="sm" onPress={handlePress}>
            Click me please
          </Button>
          <Button variant="secondary" size="md" onPress={handlePress}>
            Click me
          </Button>
          <Button variant="secondary" size="lg" onPress={handlePress}>
            Click me
          </Button>
        </VStack>
        <Square size="80px" bg="blue" borderRadius="16px">
          <Square size="64px" bg="red" borderRadius="8px" />
        </Square>
      </Grid>
    </>
  );
}

export default App;
