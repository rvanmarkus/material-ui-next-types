import * as React from 'react';

interface PaperProps extends React.HTMLAttributes<any> {
  /**
   * Useful to extend the style applied to components.
   */
  classes?: any;
  /**
   * @ignore
   */
  className?: string;
  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component?: any;
  /**
   * Shadow depth, corresponds to `dp` in the spec.
   * It's accepting values between 0 and 24 inclusive.
   */
  elevation?: number;
  /**
   * If `true`, rounded corners are disabled.
   */
  square?: boolean;
}

export default function Paper(props: PaperProps): JSX.Element;