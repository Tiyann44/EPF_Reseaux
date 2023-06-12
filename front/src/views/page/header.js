export default () => (`
<nav class="navbar navbar-expand-lg bg-body-tertiary">
<div class="container-fluid">
  <div class="navbar-brand" href="#">EPF Intranet</div>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#">Accueil</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Association</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Profil</a>
      </li>
      <li class="nav-item dropdown">
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><hr class="dropdown-divider"></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
        </ul>
      </li>
    </ul>
    <form class="d-flex nav-search" role="search">
      <input class="form-control me-2" style="background-color: white;" type="search" placeholder="Recherche" aria-label="Search">
      <button class="btn btn-outline-success" type="button">Rechercher</button>
    </form>
  </div>
</div>
</nav>
`);