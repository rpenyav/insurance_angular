'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">insurance documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AboutModule.html" data-type="entity-link" >AboutModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AboutModule-b5eb70858e410df80bf9f52b2b2efe2632de702e0528787e8b2fbbbc967930089351b9ff86192ebd4b49291a1c15d49b5eeec1ecb16be6e92c11a310fd280165"' : 'data-bs-target="#xs-components-links-module-AboutModule-b5eb70858e410df80bf9f52b2b2efe2632de702e0528787e8b2fbbbc967930089351b9ff86192ebd4b49291a1c15d49b5eeec1ecb16be6e92c11a310fd280165"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AboutModule-b5eb70858e410df80bf9f52b2b2efe2632de702e0528787e8b2fbbbc967930089351b9ff86192ebd4b49291a1c15d49b5eeec1ecb16be6e92c11a310fd280165"' :
                                            'id="xs-components-links-module-AboutModule-b5eb70858e410df80bf9f52b2b2efe2632de702e0528787e8b2fbbbc967930089351b9ff86192ebd4b49291a1c15d49b5eeec1ecb16be6e92c11a310fd280165"' }>
                                            <li class="link">
                                                <a href="components/AboutUsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AboutUsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ContactoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContactoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/IndexAboutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >IndexAboutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OficinasComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OficinasComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TalleresComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TalleresComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AppModule-eaa199d49ff097fce8f9a6c42ec3c892e50ff4b1edb600710f77a9b1daa3a0134c39c2f380eb00ee61ac2258d8552c110bd68ee1d35031deb146513627f1502c"' : 'data-bs-target="#xs-components-links-module-AppModule-eaa199d49ff097fce8f9a6c42ec3c892e50ff4b1edb600710f77a9b1daa3a0134c39c2f380eb00ee61ac2258d8552c110bd68ee1d35031deb146513627f1502c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-eaa199d49ff097fce8f9a6c42ec3c892e50ff4b1edb600710f77a9b1daa3a0134c39c2f380eb00ee61ac2258d8552c110bd68ee1d35031deb146513627f1502c"' :
                                            'id="xs-components-links-module-AppModule-eaa199d49ff097fce8f9a6c42ec3c892e50ff4b1edb600710f77a9b1daa3a0134c39c2f380eb00ee61ac2258d8552c110bd68ee1d35031deb146513627f1502c"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AuthHeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthHeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AuthPageViewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthPageViewComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AuthfooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthfooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/Error400Component.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >Error400Component</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/Error404Component.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >Error404Component</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/Error500Component.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >Error500Component</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ForgotPasswordModalComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ForgotPasswordModalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomePageViewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomePageViewComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/GestionesModule.html" data-type="entity-link" >GestionesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-GestionesModule-2b8373dfeaa6799967ab814bce8a99e7f09c8ea0211f142d97e48154c9fa560b3b91c1ee53d508b4af3682a951bf31aa950882f5e8d7aa03b9ddca92bb67eaf2"' : 'data-bs-target="#xs-components-links-module-GestionesModule-2b8373dfeaa6799967ab814bce8a99e7f09c8ea0211f142d97e48154c9fa560b3b91c1ee53d508b4af3682a951bf31aa950882f5e8d7aa03b9ddca92bb67eaf2"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-GestionesModule-2b8373dfeaa6799967ab814bce8a99e7f09c8ea0211f142d97e48154c9fa560b3b91c1ee53d508b4af3682a951bf31aa950882f5e8d7aa03b9ddca92bb67eaf2"' :
                                            'id="xs-components-links-module-GestionesModule-2b8373dfeaa6799967ab814bce8a99e7f09c8ea0211f142d97e48154c9fa560b3b91c1ee53d508b4af3682a951bf31aa950882f5e8d7aa03b9ddca92bb67eaf2"' }>
                                            <li class="link">
                                                <a href="components/IndexGestionesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >IndexGestionesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PresupuestosComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PresupuestosComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TramitesSaludComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TramitesSaludComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ServiciosModule.html" data-type="entity-link" >ServiciosModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-ServiciosModule-2f6dd11a9babf11d98b20d431528eab5ad71809d3a80c1b7fca6e6ffdb0c95b33af3645828299f17b87a89edfa588129957ca353c8cc3d4542b6882a21510077"' : 'data-bs-target="#xs-components-links-module-ServiciosModule-2f6dd11a9babf11d98b20d431528eab5ad71809d3a80c1b7fca6e6ffdb0c95b33af3645828299f17b87a89edfa588129957ca353c8cc3d4542b6882a21510077"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ServiciosModule-2f6dd11a9babf11d98b20d431528eab5ad71809d3a80c1b7fca6e6ffdb0c95b33af3645828299f17b87a89edfa588129957ca353c8cc3d4542b6882a21510077"' :
                                            'id="xs-components-links-module-ServiciosModule-2f6dd11a9babf11d98b20d431528eab5ad71809d3a80c1b7fca6e6ffdb0c95b33af3645828299f17b87a89edfa588129957ca353c8cc3d4542b6882a21510077"' }>
                                            <li class="link">
                                                <a href="components/AccidentesAutonomosComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AccidentesAutonomosComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AhorroParticularesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AhorroParticularesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ComercioAutonomosComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ComercioAutonomosComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HogarParticularesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HogarParticularesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/IndexServiciosComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >IndexServiciosComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OtrosEmpresasComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OtrosEmpresasComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OtrosParticularesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OtrosParticularesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PensionesAutonomosComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PensionesAutonomosComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PensionesEmpresasComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PensionesEmpresasComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ResponsabilidadCivilEmpresasComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ResponsabilidadCivilEmpresasComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SaludAutonomosComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SaludAutonomosComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SaludEmpresasComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SaludEmpresasComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SaludParticularesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SaludParticularesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/VehiculoParticularesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >VehiculoParticularesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/VehiculosAutonomosComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >VehiculosAutonomosComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/VidaParticularesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >VidaParticularesComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-SharedModule-d6cb9ba3c7e1e9b43826cad6a126d377662ad3909daf1409d03c2f9e92f478e8ce14aec9adda32c72fc88cb18558a8a362b0509712553fa31d68bd04cb67117f"' : 'data-bs-target="#xs-components-links-module-SharedModule-d6cb9ba3c7e1e9b43826cad6a126d377662ad3909daf1409d03c2f9e92f478e8ce14aec9adda32c72fc88cb18558a8a362b0509712553fa31d68bd04cb67117f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-d6cb9ba3c7e1e9b43826cad6a126d377662ad3909daf1409d03c2f9e92f478e8ce14aec9adda32c72fc88cb18558a8a362b0509712553fa31d68bd04cb67117f"' :
                                            'id="xs-components-links-module-SharedModule-d6cb9ba3c7e1e9b43826cad6a126d377662ad3909daf1409d03c2f9e92f478e8ce14aec9adda32c72fc88cb18558a8a362b0509712553fa31d68bd04cb67117f"' }>
                                            <li class="link">
                                                <a href="components/FooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LayoutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LayoutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavbarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NavbarComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SimuladorModule.html" data-type="entity-link" >SimuladorModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-SimuladorModule-4d456c700acd7447ade757af3fdf78a05c13633224ebe1458d0c61d76e9c2da71b03c8fc7c556fc8001c3a8f1c6c468cbf8888733b6fe1e1193bac79f34de71a"' : 'data-bs-target="#xs-components-links-module-SimuladorModule-4d456c700acd7447ade757af3fdf78a05c13633224ebe1458d0c61d76e9c2da71b03c8fc7c556fc8001c3a8f1c6c468cbf8888733b6fe1e1193bac79f34de71a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SimuladorModule-4d456c700acd7447ade757af3fdf78a05c13633224ebe1458d0c61d76e9c2da71b03c8fc7c556fc8001c3a8f1c6c468cbf8888733b6fe1e1193bac79f34de71a"' :
                                            'id="xs-components-links-module-SimuladorModule-4d456c700acd7447ade757af3fdf78a05c13633224ebe1458d0c61d76e9c2da71b03c8fc7c556fc8001c3a8f1c6c468cbf8888733b6fe1e1193bac79f34de71a"' }>
                                            <li class="link">
                                                <a href="components/StartSimulatorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StartSimulatorComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthEffects.html" data-type="entity-link" >AuthEffects</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthenticationService.html" data-type="entity-link" >AuthenticationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LanguageService.html" data-type="entity-link" >LanguageService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link" >UserService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Address.html" data-type="entity-link" >Address</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AppState.html" data-type="entity-link" >AppState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Company.html" data-type="entity-link" >Company</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/User.html" data-type="entity-link" >User</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});