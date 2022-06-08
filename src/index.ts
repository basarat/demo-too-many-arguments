type ButtonConfig = {
  title: string;
  icon: string;
  buttonText: string;
  disabled: boolean;
};

function createButton(config: ButtonConfig) {
  // ...
}

createButton({
  title: 'Social',
  icon: '👍',
  buttonText: 'Like',
  disabled: false,
});