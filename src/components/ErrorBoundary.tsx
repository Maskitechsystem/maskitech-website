import { Component, ReactNode } from "react";

interface Props { children: ReactNode; }
interface State { hasError: boolean; }

export default class ErrorBoundary extends Component<Props, State> {
  state = { hasError: false };
  static getDerivedStateFromError() { return { hasError: true }; }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{color:'#e8eaf0',padding:'40px',textAlign:'center'}}>
          <h2>Something went wrong.</h2>
        </div>
      );
    }
    return this.props.children;
  }
}