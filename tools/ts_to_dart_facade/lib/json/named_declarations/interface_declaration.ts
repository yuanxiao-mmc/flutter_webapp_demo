import {HeritageClause as tsHeritageClause, InterfaceDeclaration as tsInterfaceDeclaration} from 'typescript';

import {convertMember, convertTypeParameter, filterUndefined} from '../conversions';
import {ConvertedSyntaxKind} from '../converted_syntax_kinds';
import {HeritageClause} from '../heritage_clause';

import {MemberDeclaration} from './member_declaration';
import {NamedDeclaration} from './named_declaration';
import {TypeParameterDeclaration} from './type_parameter_declaration';

export class InterfaceDeclaration extends NamedDeclaration {
  private typeParameters: TypeParameterDeclaration[];
  private heritageClauses?: HeritageClause[];
  private members: MemberDeclaration[];
  constructor(node: tsInterfaceDeclaration) {
    super(node, ConvertedSyntaxKind.InterfaceDeclaration);

    if (node.typeParameters) {
      this.typeParameters = node.typeParameters.map(convertTypeParameter).filter(filterUndefined);
    }
    if (node.heritageClauses) {
      this.heritageClauses = node.heritageClauses
                                 .map((clause: tsHeritageClause) => {
                                   return new HeritageClause(clause);
                                 })
                                 .filter(filterUndefined);
    }
    this.members = node.members.map(convertMember).filter(filterUndefined);
  }
}
