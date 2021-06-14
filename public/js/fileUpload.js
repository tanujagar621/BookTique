FilePond.registerPlugin(
  FilePondPluginImagePreview,
  FilePondPluginImageResize,
  FilePondPluginFileEncode
);
FilePond.create({
  labelIdle: `Drag & Drop your picture or <span class="filepond--label-action">Browse</span>`,
  imagePreviewHeight: 200,
  stylePanelAspectRatio: 15 / 10,
  imageResizeTargetWidth: 100,
  imageResizeTargetHeight: 150,
});
FilePond.parse(document.body);