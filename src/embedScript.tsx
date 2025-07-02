import { createRoot } from 'react-dom/client';
import { EmbedWidget } from './EmbedWidget';

(function () {
  const scriptEl = document.currentScript as HTMLScriptElement;

  const containerId = scriptEl.getAttribute('data-container-id')!;
  const title = scriptEl.getAttribute('data-title') || 'Default Widget';
  const description = scriptEl.getAttribute('data-description') || 'No Content';
  const link = scriptEl.getAttribute('data-link') || '#';
  const height = scriptEl.getAttribute('data-height') || '250px';
  console.log(containerId,'container')
  const container = document.getElementById(containerId);
  if (container) {
    const root = createRoot(container);
    root.render(<EmbedWidget title={title} link={link} height={height} description={description} />);
  }
})();
