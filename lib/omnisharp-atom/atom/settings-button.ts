import {CompositeDisposable, Disposable} from "rx";
import Omni = require('../../omni-sharp-server/omni')
import StatusBarComponent = require('../views/status-bar-view');
import React = require('react');
import {dock} from "../atom/dock";

class SettingsButton implements OmniSharp.IFeature {
    private disposable: Rx.CompositeDisposable;
    private _active = false;

    public activate() {
        this.disposable = new CompositeDisposable();
        var button = React.DOM.a({
            className: `btn icon-gear`,
            onClick: () => atom.commands.dispatch(atom.views.getView(atom.workspace), "omnisharp-atom:setings")
        });

        this.disposable.add(dock.addButton(
            'settings-button',
            'Settings',
            button,
            { priority: 1000 }
        ));
    }

    public dispose() {
        this.disposable.dispose();
    }

    public required = true;
    public title = "Show Settings button";
    public description = "Shows the settings button on the OmniSharp Dock";
    public default = true;
}

export var settingsButton = new SettingsButton();
