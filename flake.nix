{
  description = "Web Development Environment";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-25.05";
  };

  outputs = { self, nixpkgs }:
    let
      system = "x86_64-linux";

      pkgs = import nixpkgs {
        inherit system;
      };
    in {
      devShells.${system}.default = pkgs.mkShell {
        packages = with pkgs; [
          nodejs_22
        ];

        shellHook = ''
          echo ""
          echo "Web development | NPM"
          echo "------------------------------------------"
          echo "Node  : $(node -v)"
          echo "NPM   : $(npm -v)"
          echo "-Ar3ef4ct \('o')/"
        '';
      };
    };
}

