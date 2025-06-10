
// Blocca completamente i tentativi di WebSocket di Vite
(function() {
  // Override del WebSocket constructor per bloccare connessioni Vite
  const OriginalWebSocket = window.WebSocket;
  window.WebSocket = function(url, protocols) {
    if (url && url.toString().includes('__vite_ping')) {
      console.log('Vite WebSocket bloccato');
      return {
        close: () => {},
        addEventListener: () => {},
        removeEventListener: () => {},
        send: () => {},
        readyState: 3 // CLOSED
      };
    }
    return new OriginalWebSocket(url, protocols);
  };
  
  // Blocca anche eventuali import di vite/client
  if (window.console && window.console.warn) {
    const originalWarn = window.console.warn;
    window.console.warn = function(...args) {
      const message = args.join(' ');
      if (message.includes('[vite]') || message.includes('WebSocket')) {
        return; // Non mostrare warning Vite
      }
      originalWarn.apply(this, args);
    };
  }
})();
