import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import Text from '../Text/Text';
import { ThemeContext } from '../../theme';

const INFO = 'info';
const SUCCESS = 'success';
const ERROR = 'error';

const messageTypes = { INFO, SUCCESS, ERROR };

const MessageView = ({
  message,
  mode
}) => {
  const theme = useContext(ThemeContext);

  return (
    <View style={styles.container}>
      <Text type="body" style={styles.text(mode, theme)}>{message}</Text>
    </View>
  );
};

const getTextColor = (mode, theme) => {
  switch (mode) {
    case SUCCESS:
      return theme.colors.success;
    case ERROR:
      return theme.colors.error;
    default:
      return theme.colors.bodyText;
  }
};

// TODO: Is there any benefit of using StyleSheet when styles are function?
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: (mode, theme) => ({
    textAlign: 'center',
    padding: theme.spacing.small,
    color: getTextColor(mode, theme),
  }),
});

MessageView.propTypes = {
  message: PropTypes.string.isRequired,
  mode: PropTypes.oneOf(Object.values(messageTypes)),
};

MessageView.defaultProps = {
  mode: messageTypes.INFO,
};

export default MessageView;
export { messageTypes };