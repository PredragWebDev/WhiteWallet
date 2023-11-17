import React, {ReactNode, RefObject} from 'react';
import {
  KeyboardAvoidingView,
  StyleSheet,
  ScrollView,
  StatusBar,
  StatusBarStyle,
  Platform,
  ViewStyle,
} from 'react-native';
import {Edge, SafeAreaView} from 'react-native-safe-area-context';

import theme from '@/constants/theme';
import {horizontalScale} from '@/helpers/scale';

type AppLayoutType = {
  children: ReactNode;
  statusBarColor?: string;
  barStyle?: StatusBarStyle;
  scrollable?: boolean;
  noSafeArea?: boolean;
  noPadding?: boolean;
  addBottomInset?: boolean;
  addTopInset?: boolean;
  backgroundColor?: string;
  containerStyle?: ViewStyle;
  noScrollView?: boolean;
  onScreenScroll?: () => void;
  scrollViewRef?: RefObject<ScrollView>;
};

function AppLayout({
  children,
  statusBarColor = theme.colors.black,
  barStyle = 'dark-content',
  scrollable = true,
  noSafeArea = true,
  noPadding = false,
  addBottomInset = false,
  addTopInset = true,
  backgroundColor = theme.colors.white,
  containerStyle,
  noScrollView = false,
  onScreenScroll = () => {},
  scrollViewRef,
}: AppLayoutType) {
  const behavior: 'padding' | 'height' | 'position' | undefined =
    Platform.OS === 'android' ? undefined : 'padding';

  const contentContainerStyle = {
    ...styles.contentContainer,
    paddingHorizontal: noPadding
      ? 0
      : horizontalScale(20),
    backgroundColor,
  };

  const edges: Edge[] = [];
  if (addBottomInset) {
    edges.push('bottom');
  }
  if (addTopInset) {
    edges.push('top');
  }
  if (noSafeArea) {
    edges.length = 0;
  }

  return (
    <SafeAreaView
      style={[styles.container, containerStyle]}
      edges={edges}>
      <StatusBar
        animated={true}
        backgroundColor={statusBarColor}
        barStyle={barStyle}
      />

      <KeyboardAvoidingView style={contentContainerStyle} behavior={behavior}>
        {noScrollView ? (
          children
        ) : (
          <ScrollView
            ref={scrollViewRef}
            showsVerticalScrollIndicator={false}
            scrollEnabled={scrollable}
            scrollEventThrottle={500}
            onScroll={onScreenScroll}>
            {children}
          </ScrollView>
        )}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    flex: 1,
  },
  contentContainer: {
    flex: 1,
  },
});
export default AppLayout;
