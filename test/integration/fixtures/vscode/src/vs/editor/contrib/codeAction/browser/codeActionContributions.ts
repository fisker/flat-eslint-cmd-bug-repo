/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { registerEditorAction, registerEditorCommand, registerEditorContribution } from 'vs/editor/browser/editorExtensions';
import { AutoFixAction, CodeActionCommand, FixAllAction, OrganizeImportsAction, QuickFixAction, CodeActionController, RefactorAction, RefactorPreview, SourceAction } from 'vs/editor/contrib/codeAction/browser/codeActionCommands';
import 'vs/editor/contrib/codeAction/browser/codeActionWidgetContribution';

registerEditorContribution(CodeActionController.ID, CodeActionController);
registerEditorAction(QuickFixAction);
registerEditorAction(RefactorAction);
registerEditorAction(RefactorPreview);
registerEditorAction(SourceAction);
registerEditorAction(OrganizeImportsAction);
registerEditorAction(AutoFixAction);
registerEditorAction(FixAllAction);
registerEditorCommand(new CodeActionCommand());
