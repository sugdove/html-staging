class Utils {
  public blobToBase64(blob: Blob, callback: (base64: string | ArrayBuffer | null | undefined) => void) {
    const file = new FileReader();
    file.onload = (e) => callback(e.target?.result)
    file.readAsDataURL(blob)
  }
}

export default Utils