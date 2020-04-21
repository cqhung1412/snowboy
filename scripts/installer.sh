#!/bin/bash

Installer_yesno () {
  while true; do
    echo -e "\033[96mDo you want to execute electron rebuild ? [Y/n]\033[0m"
    read -n 1 -p "$(echo -e "\033[96mYour choice: \033[0m")"
    echo
    [[ $REPLY =~ [Yy] ]] && electron-rebuild && break || break
    [[ $REPLY =~ [Nn] ]] && break
  done
}

node-pre-gyp clean configure install --build-from-source 2>/dev/null

echo

Installer_yesno


