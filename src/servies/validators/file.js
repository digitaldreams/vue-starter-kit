//https://svn.apache.org/repos/asf/httpd/httpd/trunk/docs/conf/mime.types
export function mimes(files, allowedMimes) {
  if (files == null) {
    return "";
  }

  let isVerified = true;
  if (files.length > 0) {
    let errs = [];
    for (let i = 0; i < files.length; i++) {
      let file = files[i];

      if (allowedMimes.includes(file.type) !== true) {
        errs.push({
          file: file,
          message:
            "The :attribute must be a file of type: " +
            allowedMimes
              .map((mim) => {
                if (
                  Object.values(FileExtensionToMimeType || {}).includes(mim)
                ) {
                  return (
                    Object.keys(FileExtensionToMimeType).find(
                      (key) => FileExtensionToMimeType[key] === mim
                    ) || mim
                  );
                }
              })
              .join(","),
        });
      }
    }
    if (errs.length > 0) {
      return errs;
    }

    return isVerified;
  }
  return "";
}

export function image(files, bool) {
  return this.mimes(files, [
    "image/jpg",
    "image/jpeg",
    "image/png",
    "image/bmp",
    "image/gif",
    "image/svg+xml",
    "image/webp",
  ]);
}
export function maxFiles(files, count) {
  if (files == null || !Array.isArray(files)) {
    return "";
  }
  if (files.length > count) {
    return "The :attribute must be less than " + count + " files.";
  }
  return true;
}

// size in KB.
export function maxSize(files, size) {
  if (files == null) {
    return "";
  }
  let isVerified = true;
  if (files.length > 0) {
    let errs = [];
    for (let i = 0; i < files.length; i++) {
      let file = files[i];
      if (file.size > size * 1000) {
        errs.push({
          file: file,
          message: "The :attribute must be less than " + size + " kilobytes.",
        });
      }
    }
    if (errs.length > 0) {
      return errs;
    }

    return isVerified;
  }
}
