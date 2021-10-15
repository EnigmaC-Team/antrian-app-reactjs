import "./login.css";

export function Login() {
  return (
    <form>
      <dl class="row">
        <dt class="col-1 me-3">
          <i class="fas fa-user fs-1 mt-2"></i>
        </dt>
        <dd class="col-10">
          <div class="form-floating">
            <input
              type="email"
              class="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput">Nomor Induk Mahasiswa (NIM)</label>
          </div>
        </dd>
      </dl>
      <dl class="row">
        <dt class="col-1 me-3">
          <i class="fas fa-lock fs-1 mt-2"></i>
        </dt>
        <dd class="col-10">
          <div class="form-floating">
            <input
              type="password"
              class="form-control form-height"
              id="floatingPassword"
              placeholder="Password"
            />
            <label for="floatingPassword">Password</label>
          </div>
        </dd>
      </dl>
      <button class="btn btn-primary masuk-text float-end me-3">MASUK</button>
    </form>
  );
}
