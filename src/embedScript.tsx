import { createRoot } from 'react-dom/client';
import { EmbedWidget } from './EmbedWidget';

(function () {
  const scriptEl = document.currentScript as HTMLScriptElement;

  const containerId = scriptEl.getAttribute('data-container-id')!;
  const title = scriptEl.getAttribute('data-title') || 'Default Widget';
    const shortDescription = scriptEl.getAttribute('data-shortdescription') || 'No Content';
  const description = scriptEl.getAttribute('data-description') || 'No Content';
  const link = scriptEl.getAttribute('data-link') || '#';
  console.log(containerId,'container')
  const container = document.getElementById(containerId);
  if (container) {
    const root = createRoot(container);
    root.render(<EmbedWidget title={title} link={link} description={description} shortDescription={shortDescription}/>);
  }
})();
