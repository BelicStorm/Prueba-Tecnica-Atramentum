import React, { ReactNode } from "react";

interface ErrorBoundaryProps {
    children:ReactNode
}
interface ErrorState {
    error:any
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorState> {
    
    state: ErrorState = {
        error: null,
    };
  
    static getDerivedStateFromError(error:any) {
      return { error };
    }
    
    render() {
      if (this.state.error) {
        return (
          <div>
            <h2>An error was detected!</h2>
          </div>
        );
      }
      return this.props.children;
    }  
}

export default ErrorBoundary