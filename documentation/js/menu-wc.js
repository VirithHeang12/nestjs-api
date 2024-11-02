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
                    <a href="index.html" data-type="index-link">nestjs-intro documentation</a>
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
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-879ae973f59eb45b4e229857bae10b3c633477cc0066e6b0af566127d9fc7c3dc6ab89a2bffab5053ec43c7a0aebe2ee1ef32a03688d716cd5e291a75449aba6"' : 'data-bs-target="#xs-controllers-links-module-AppModule-879ae973f59eb45b4e229857bae10b3c633477cc0066e6b0af566127d9fc7c3dc6ab89a2bffab5053ec43c7a0aebe2ee1ef32a03688d716cd5e291a75449aba6"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-879ae973f59eb45b4e229857bae10b3c633477cc0066e6b0af566127d9fc7c3dc6ab89a2bffab5053ec43c7a0aebe2ee1ef32a03688d716cd5e291a75449aba6"' :
                                            'id="xs-controllers-links-module-AppModule-879ae973f59eb45b4e229857bae10b3c633477cc0066e6b0af566127d9fc7c3dc6ab89a2bffab5053ec43c7a0aebe2ee1ef32a03688d716cd5e291a75449aba6"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-879ae973f59eb45b4e229857bae10b3c633477cc0066e6b0af566127d9fc7c3dc6ab89a2bffab5053ec43c7a0aebe2ee1ef32a03688d716cd5e291a75449aba6"' : 'data-bs-target="#xs-injectables-links-module-AppModule-879ae973f59eb45b4e229857bae10b3c633477cc0066e6b0af566127d9fc7c3dc6ab89a2bffab5053ec43c7a0aebe2ee1ef32a03688d716cd5e291a75449aba6"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-879ae973f59eb45b4e229857bae10b3c633477cc0066e6b0af566127d9fc7c3dc6ab89a2bffab5053ec43c7a0aebe2ee1ef32a03688d716cd5e291a75449aba6"' :
                                        'id="xs-injectables-links-module-AppModule-879ae973f59eb45b4e229857bae10b3c633477cc0066e6b0af566127d9fc7c3dc6ab89a2bffab5053ec43c7a0aebe2ee1ef32a03688d716cd5e291a75449aba6"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-07cd22d7a5c5f9323ca9b766d9260cc37726f0a0d72428185c6cef4dd33877e192268cf95a52bf6b168d21a9a3ddee35ec3c07fc549e82c59a5bf3032bf6c55a"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-07cd22d7a5c5f9323ca9b766d9260cc37726f0a0d72428185c6cef4dd33877e192268cf95a52bf6b168d21a9a3ddee35ec3c07fc549e82c59a5bf3032bf6c55a"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-07cd22d7a5c5f9323ca9b766d9260cc37726f0a0d72428185c6cef4dd33877e192268cf95a52bf6b168d21a9a3ddee35ec3c07fc549e82c59a5bf3032bf6c55a"' :
                                            'id="xs-controllers-links-module-AuthModule-07cd22d7a5c5f9323ca9b766d9260cc37726f0a0d72428185c6cef4dd33877e192268cf95a52bf6b168d21a9a3ddee35ec3c07fc549e82c59a5bf3032bf6c55a"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-07cd22d7a5c5f9323ca9b766d9260cc37726f0a0d72428185c6cef4dd33877e192268cf95a52bf6b168d21a9a3ddee35ec3c07fc549e82c59a5bf3032bf6c55a"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-07cd22d7a5c5f9323ca9b766d9260cc37726f0a0d72428185c6cef4dd33877e192268cf95a52bf6b168d21a9a3ddee35ec3c07fc549e82c59a5bf3032bf6c55a"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-07cd22d7a5c5f9323ca9b766d9260cc37726f0a0d72428185c6cef4dd33877e192268cf95a52bf6b168d21a9a3ddee35ec3c07fc549e82c59a5bf3032bf6c55a"' :
                                        'id="xs-injectables-links-module-AuthModule-07cd22d7a5c5f9323ca9b766d9260cc37726f0a0d72428185c6cef4dd33877e192268cf95a52bf6b168d21a9a3ddee35ec3c07fc549e82c59a5bf3032bf6c55a"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PostsModule.html" data-type="entity-link" >PostsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-PostsModule-42e56235c27b2ca4282dc066e9a14f79cfd1371354f7fc87bcceb9bc066663f22d08550627c7538a8ce158c1a0440e3baeab289a0dd23d1a0dab6b0da2eae0de"' : 'data-bs-target="#xs-controllers-links-module-PostsModule-42e56235c27b2ca4282dc066e9a14f79cfd1371354f7fc87bcceb9bc066663f22d08550627c7538a8ce158c1a0440e3baeab289a0dd23d1a0dab6b0da2eae0de"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PostsModule-42e56235c27b2ca4282dc066e9a14f79cfd1371354f7fc87bcceb9bc066663f22d08550627c7538a8ce158c1a0440e3baeab289a0dd23d1a0dab6b0da2eae0de"' :
                                            'id="xs-controllers-links-module-PostsModule-42e56235c27b2ca4282dc066e9a14f79cfd1371354f7fc87bcceb9bc066663f22d08550627c7538a8ce158c1a0440e3baeab289a0dd23d1a0dab6b0da2eae0de"' }>
                                            <li class="link">
                                                <a href="controllers/PostsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PostsModule-42e56235c27b2ca4282dc066e9a14f79cfd1371354f7fc87bcceb9bc066663f22d08550627c7538a8ce158c1a0440e3baeab289a0dd23d1a0dab6b0da2eae0de"' : 'data-bs-target="#xs-injectables-links-module-PostsModule-42e56235c27b2ca4282dc066e9a14f79cfd1371354f7fc87bcceb9bc066663f22d08550627c7538a8ce158c1a0440e3baeab289a0dd23d1a0dab6b0da2eae0de"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PostsModule-42e56235c27b2ca4282dc066e9a14f79cfd1371354f7fc87bcceb9bc066663f22d08550627c7538a8ce158c1a0440e3baeab289a0dd23d1a0dab6b0da2eae0de"' :
                                        'id="xs-injectables-links-module-PostsModule-42e56235c27b2ca4282dc066e9a14f79cfd1371354f7fc87bcceb9bc066663f22d08550627c7538a8ce158c1a0440e3baeab289a0dd23d1a0dab6b0da2eae0de"' }>
                                        <li class="link">
                                            <a href="injectables/PostsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UsersModule-a6ee24fb4f0b6c76d85e4e2320957b140a9a47a42951369feee8bd05c5e80c8f55002290e21c529c35ded04740d90d4cad1fd1d55ae462dd555884f39fd5b06f"' : 'data-bs-target="#xs-controllers-links-module-UsersModule-a6ee24fb4f0b6c76d85e4e2320957b140a9a47a42951369feee8bd05c5e80c8f55002290e21c529c35ded04740d90d4cad1fd1d55ae462dd555884f39fd5b06f"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-a6ee24fb4f0b6c76d85e4e2320957b140a9a47a42951369feee8bd05c5e80c8f55002290e21c529c35ded04740d90d4cad1fd1d55ae462dd555884f39fd5b06f"' :
                                            'id="xs-controllers-links-module-UsersModule-a6ee24fb4f0b6c76d85e4e2320957b140a9a47a42951369feee8bd05c5e80c8f55002290e21c529c35ded04740d90d4cad1fd1d55ae462dd555884f39fd5b06f"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UsersModule-a6ee24fb4f0b6c76d85e4e2320957b140a9a47a42951369feee8bd05c5e80c8f55002290e21c529c35ded04740d90d4cad1fd1d55ae462dd555884f39fd5b06f"' : 'data-bs-target="#xs-injectables-links-module-UsersModule-a6ee24fb4f0b6c76d85e4e2320957b140a9a47a42951369feee8bd05c5e80c8f55002290e21c529c35ded04740d90d4cad1fd1d55ae462dd555884f39fd5b06f"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-a6ee24fb4f0b6c76d85e4e2320957b140a9a47a42951369feee8bd05c5e80c8f55002290e21c529c35ded04740d90d4cad1fd1d55ae462dd555884f39fd5b06f"' :
                                        'id="xs-injectables-links-module-UsersModule-a6ee24fb4f0b6c76d85e4e2320957b140a9a47a42951369feee8bd05c5e80c8f55002290e21c529c35ded04740d90d4cad1fd1d55ae462dd555884f39fd5b06f"' }>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#controllers-links"' :
                                'data-bs-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AuthController.html" data-type="entity-link" >AuthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/PostsController.html" data-type="entity-link" >PostsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UsersController.html" data-type="entity-link" >UsersController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreatePost.html" data-type="entity-link" >CreatePost</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreatePostMetaOptionsDto.html" data-type="entity-link" >CreatePostMetaOptionsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetUsersParamDto.html" data-type="entity-link" >GetUsersParamDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatchPostDto.html" data-type="entity-link" >PatchPostDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatchUserDto.html" data-type="entity-link" >PatchUserDto</a>
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
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoggerMiddleware.html" data-type="entity-link" >LoggerMiddleware</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PostsService.html" data-type="entity-link" >PostsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UsersService.html" data-type="entity-link" >UsersService</a>
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
                                <a href="interfaces/Post.html" data-type="entity-link" >Post</a>
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
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                        </ul>
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