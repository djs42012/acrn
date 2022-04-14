import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

export default class Welcome extends React.Component {
  styles = {
    wrapper: {
      flex: 1,
      padding: 24,
      justifyContent: 'center',
      alignItems: 'center',
    },
    header: {
      fontSize: 28,
      marginBottom: 18,
      color: 'purple',
    },
    content: {
      fontSize: 18,
      marginBottom: 10,
      lineHeight: 18,
    },
  };

  showApp = (event) => {
    const { showApp } = this.props;
    event.preventDefault();

    if (showApp) {
      showApp();
    }
  };

  render() {
    return (
      <View style={this.styles.wrapper}>
        <Text style={this.styles.header}>
          Welcome to acrn-rn&apos;s component library
        </Text>
        <Text style={this.styles.content}>
          This is a UI Component development environment for your React Native
          app, and any components you would like to make or alter. Here you can
          display and interact with your UI components as stories. A story is
          like a visual test case.
        </Text>
        <Text style={this.styles.content}>
          Try editing the &quot;storybook/stories/Welcome.js&quot; file to edit
          this message, and playing with some of the properties passed in to the
          components in our stories!
        </Text>
      </View>
    );
  }
}

Welcome.defaultProps = {
  showApp: null,
};

Welcome.propTypes = {
  showApp: PropTypes.func,
};
