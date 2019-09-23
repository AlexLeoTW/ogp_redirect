class RedirectDialog {

  // redirectUrl: None,
  // redirect: True,  // redirect if not canceled
  // dialog = None,

  constructor(id, redirectUrl) {
    this.redirectUrl = redirectUrl
    this.redirect = true,
    this.dialog = $(`#${id}`)
    this.delay = 3000
    $(document).ready(() => {
      this._showDialog
    })

    $(`#${id} .btn-primary`).click(() => {
      window.location.href = this.redirectUrl
    })
  }

  _showDialog() {
    this.dialog.modal()
  }

  delayedRedirect() {
    setTimeout(() => {
      if (this.dialog.css('display')  === 'block') {
        window.location.href = this.redirectUrl
      }
    }, 3000);
  }
}
