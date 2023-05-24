import sanitizeHtml from 'sanitize-html';

function RenderHTML({ htmlContent }) {
  // const sanitizedHTML = sanitizeHtml(htmlContent);
  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
}

export default RenderHTML;
